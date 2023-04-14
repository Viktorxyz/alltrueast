import moongose from 'mongoose';
const { Schema } = moongose;

const ServiceBooked = new Schema({
	appointmentId: {
		type: String,
		required: true
	},
	serviceId: [{
		type: String,
		required: true
	}],
	price: {
		type: Number,
		required: true
	}
}, { timestamps: true });

export default moongose.model('Service_Booked', ServiceBooked);
