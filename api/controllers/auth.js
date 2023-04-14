import User from '../models/User.js'
import UserRoles from '../models/UserRoles.js'
import Role from '../models/Role.js'
import { createError } from '../utils/error.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const register = async (req, res, next) => {
	try {
		// CHECK IF USERNAME IS TAKEN
		if (await User.findOne({ username: req.body.username })) {
			next(createError(409, 'Username is taken'))
		}
		// CHECK IF EMAIL IS TAKEN
		else if (await User.findOne({ email: req.body.email })) {
			next(createError(409, 'Email is taken'))
		}
		// CHECK IF NUMBER IS TAKEN
		else if (await User.findOne({ email: req.body.number })) {
			next(createError(409, 'Number is taken'))
		}
		else {
			// REGISTER NEW USER
			const salt = bcrypt.genSaltSync(10)
			const hash = bcrypt.hashSync(req.body.password, salt)
			req.body.password = hash
			const user = new User(req.body)
			await user.save()
			res.status(200).send('User has been registered.')
		}
	} catch (error) {
		next(error)
	}
}

export const login = async (req, res, next) => {
	try {
		const user = await User.findOne({ username: req.body.username })
		if (!user) next(createError(404, 'User not found.'))
		else {
			const checkPassword = await bcrypt.compare(req.body.password, user.password)
			if (!checkPassword) next(createError(404, 'Wrong password or username.'))
			else {
				const userRoles = (await UserRoles.find({ user: user._id }))?.map(userRole => { return userRole.role })
				const roles = ((await Role.find()).map(role => { if (userRoles.includes(role._id)) return role.name })).filter(Boolean)

				console.log(userRoles, roles)

				const accessToken = jwt.sign({ id: user._id, roles }, process.env.JWT, { expiresIn: '15s' })
				const refreshToken = jwt.sign({ id: user._id }, process.env.JWT, { expiresIn: '60s' })

				res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 1000 * 60 }).status(200).json({ accessToken })
			}
		}
	} catch (error) {
		next(error)
	}
}

export const refresh = async (req, res, next) => {
	try {
		const cookies = req.cookies
		if (!cookies?.jwt) next(createError(401, 'You are not authorized.'))
		else {
			const refreshToken = cookies.jwt

			jwt.verify(refreshToken, process.env.JWT, async (error, decoded) => {
				if (error) next(createError(403, 'Forbidden.'))
				else {
					const user = await User.findOne({ username: decoded.username })
					if (!user) next(createError(404, 'User not found.'))
					else {
						const userRoles = (await UserRoles.find({ user: user._id }))?.map(userRole => { return userRole.role })
						const roles = ((await Role.find()).map(role => { if (userRoles.includes(role._id)) return role.name })).filter(Boolean)

						console.log(roles, userRoles)

						const accessToken = jwt.sign({ id: user._id, roles }, process.env.JWT, { expiresIn: '15s' })

						res.json({ accessToken })
					}
				}
			})
		}
	} catch (error) {
		next(error)
	}
}

export const logout = async (req, res, next) => {
	const cookies = req.cookies
	if (!cookies?.jwt) res.sendStatus(204)
	else {
		res.clearCookie('jwt', { httpOnly: true, maxAge: 1000 * 60 })
		res.status(200).json({ message: 'Cookie cleared.' })
	}
}
