import Type from '../models/Type.js'

export const createType = async (req, res, next) => {
	const typ = new Type(req.body)
	try {
		const savedType = await typ.save()
		res.status(200).json(savedType)
	} catch (error) {
		next(error)
	}
}
export const updateType = async (req, res, next) => {
	try {
		const updatedType = await Type.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
		res.status(200).json(updatedType)
	} catch (error) {
		next(error)
	}
}
export const deleteType = async (req, res, next) => {
	try {
		await Type.findByIdAndDelete(req.params.id)
		res.status(200).json("Service type has been deleted.")
	} catch (error) {
		next(error)
	}
}
export const getType = async (req, res, next) => {
	try {
		const typ = await Type.findById(req.params.id)
		res.status(200).json(typ)
	} catch (error) {
		next(error)
	}
}
export const getTypes = async (req, res, next) => {
	try {
		const types = await Type.find()
		res.status(200).json(types)
	} catch (error) {
		next(error)
	}
}
