import moongose from 'mongoose';
const { Schema } = moongose;

const ServiceProvided = new Schema({
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

export default moongose.model('Service_Provided', ServiceProvided);
