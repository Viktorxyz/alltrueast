import jwt from 'jsonwebtoken'
import { createError } from './error.js'

export const verifyToken = (req, res, next, callback) => {
	const accessToken = req.cookies.jwt
	console.log(accessToken)
	console.log(req.headers, req.cookies)

	if (!accessToken) next(createError(401, 'You are not authenticated.'))
	else {
		console.log(req.headers.authorization || req.headers.Authorization)

		jwt.verify(accessToken, process.env.JWT, (error, user) => {
			if (error) next(createError(403, 'Forbidden. / Token is not valid.'))
			req.roles = user.roles
			req.id = user.id
			callback()
		})
	}
}
export const verifyUser = (req, res, next) => {
	verifyToken(req, res, next, () => {
		if (req.user.id === req.params.id) next()
		else next(createError(403, 'You are not authorized.'))
	})
}
export const verifyAdmin = (req, res, next) => {
	verifyToken(req, res, next, () => {
		next()
	})
}
