import Permission from '../models/Permission.js'

export const createPermission = async (req, res, next) => {
	const permission = new Permission(req.body)
	try {
		const savedPermission = await permission.save()
		res.status(200).json(savedPermission)
	} catch (error) {
		next(error)
	}
}
export const updatePermission = async (req, res, next) => {
	try {
		const updatedPermission = await Permission.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
		res.status(200).json(updatedPermission)
	} catch (error) {
		next(error)
	}
};
export const deletePermission = async (req, res, next) => {
	try {
		await Permission.findByIdAndDelete(req.params.id)
		res.status(200).json("Permission has been deleted.")
	} catch (error) {
		next(error)
	}
};
export const getPermission = async (req, res, next) => {
	try {
		const permission = await Permission.findById(req.params.id)
		res.status(200).json(permission)
	} catch (error) {
		next(error)
	}
};
export const getPermissions = async (req, res, next) => {
	try {
		const permissions = await Permission.find()
		res.status(200).json(permissions)
	} catch (error) {
		next(error)
	}
};
