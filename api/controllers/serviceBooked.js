import ServiceBooked from '../models/ServiceBooked.js';

export const createServiceBooked = async (req, res, next) => {
    const serviceBooked = new ServiceBooked(req.body);
    try {
	const savedServiceBooked = await serviceBooked.save();
	res.status(200).json(savedServiceBooked);
    } catch (error) {
	next(error);
    }
};
export const updateServiceBooked = async (req, res, next) => {
    try {
	const updatedServiceBooked = await ServiceBooked.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
	res.status(200).json(updatedServiceBooked);
    } catch (error) {
	next(error);
    }
};
export const deleteServiceBooked = async (req, res, next) => {
    try {
	await ServiceBooked.findByIdAndDelete(req.params.id);
	res.status(200).json("ServiceBooked has been deleted.");
    } catch (error) {
	next(error);
    }
};
export const getServiceBooked = async (req, res, next) => {
    try {
	const serviceBooked = ServiceBooked.findById(req.params.id);
	res.status(200).json(serviceBooked);
    } catch (error) {
	next(error);
    }
};
export const getServicesBooked = async (req, res, next) => {
    try {
	const servicesBooked = ServiceBooked.find();
	res.status(200).json(servicesBooked);
    } catch (error) {
	next(error);
    }
};
