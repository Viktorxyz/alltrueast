import mongoose from 'mongoose';
const { Schema } = mongoose;

const User = new Schema({
	first_name: {
		type: String,
		required: true
	},
	last_name: {
		type: String,
		required: true
	},
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	number: {
		type: String,
		required: true
	},
	image: {
		type: String
	},
	points: {
		type: Number,
		min: 0
	}
}, { timestamps: true });

export default mongoose.model('User', User);
