import Role from '../models/Role.js';

export const createRole = async (req, res, next) => {
	const name = req.body.name.toUpperCase().replace(/ /g,"_")
	console.log(name)
	const role = new Role({name})
	try {
		const savedRole = await role.save()
		res.status(200).json(savedRole)
	} catch (error) {
		next(error)
	}
}
export const updateRole = async (req, res, next) => {
	try {
		const updatedRole = await Role.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
		res.status(200).json(updatedRole);
	} catch (error) {
		next(error);
	}
};
export const deleteRole = async (req, res, next) => {
	try {
		await Role.findByIdAndDelete(req.params.id);
		res.status(200).json("Role has been deleted.");
	} catch (error) {
		next(error);
	}
};
export const getRole = async (req, res, next) => {
	try {
		const role = await Role.findById(req.params.id);
		res.status(200).json(role);
	} catch (error) {
		next(error);
	}
};
export const getRoles = async (req, res, next) => {
	try {
		const roles = await Role.find();
		res.status(200).json(roles);
	} catch (error) {
		next(error);
	}
};
