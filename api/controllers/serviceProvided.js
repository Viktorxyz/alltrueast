import ServiceProvided from '../models/ServiceProvided.js';

export const createServiceProvided = async (req, res, next) => {
    const serviceProvided = new ServiceProvided(req.body);
    try {
	const savedServiceProvided = await serviceProvided.save();
	res.status(200).json(savedServiceProvided);
    } catch (error) {
	next(error);
    }
};
export const updateServiceProvided = async (req, res, next) => {
    try {
	const updatedServiceProvided = await ServiceProvided.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
	res.status(200).json(updatedServiceProvided);
    } catch (error) {
	next(error);
    }
};
export const deleteServiceProvided = async (req, res, next) => {
    try {
	await ServiceProvided.findByIdAndDelete(req.params.id);
	res.status(200).json("Service provided has been deleted.");
    } catch (error) {
	next(error);
    }
};
export const getServiceProvided = async (req, res, next) => {
    try {
	const serviceProvided = ServiceProvided.findById(req.params.id);
	res.status(200).json(serviceProvided);
    } catch (error) {
	next(error);
    }
};
export const getServicesProvided = async (req, res, next) => {
    try {
	const servicesProvided = ServiceProvided.find();
	res.status(200).json(servicesProvided);
    } catch (error) {
	next(error);
    }
};
