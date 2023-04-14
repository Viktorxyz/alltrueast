import moongose from 'mongoose';
const { Schema } = moongose;

const Appointment = new Schema({
    employeeId:{
	type: String,
	required: true
    },
    clientId:{
	type: String,
	required: true
    },
    startTime:{
	type: Date,
    },
    endTime:{
	type: Date
    },
    price:{
	type: Number,
	required: true
    },
    canceled:{
	type: Boolean,
	default: false
    },
    cancellationReason:{
	type: String
    }
}, { timestamps: true});

export default moongose.model('Appointment', Appointment);
