import Appointment from '../models/Appointment.js'

export const createAppointment = async (req, res, next) => {
	const appointment = new Appointment(req.body)
	try {
		const savedAppointment = await appointment.save()
		res.status(200).json(savedAppointment)
	} catch (error) {
		next(error)
	}
};
export const updateAppointment = async (req, res, next) => {
	try {
		const appointment = await Appointment.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
		res.status(200).json(appointment)
	} catch (error) {
		next(error)
	}
};
export const deleteAppointment = async (req, res, next) => {
	try {
		await Appointment.findByIdAndDelete(req.params.id)
		res.status(200).json('Appointment has been deleted')
	} catch (error) {
		next(error)
	}
};
export const getAppointment = async (req, res, next) => {
	try {
		const appointment = await Appointment.findOne({ id: req.params.id })
		res.status(200).json(appointment)
	} catch (error) {
		next(error)
	}
};
export const getAppointments = async (req, res, next) => {
	try {
		const appointments = Appointment.find()
		res.status(200).json(appointments)
	} catch (error) {
		next(error)
	}
};
