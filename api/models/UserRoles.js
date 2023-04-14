import mongoose from 'mongoose'
const { Schema } = mongoose

const UserRoles = new Schema({
	user: {
		type: String,
		required: true
	},
	role: {
		type: String,
		required: true
	}
}, { timestamps: true })

export default mongoose.model('User_Roles', UserRoles)
