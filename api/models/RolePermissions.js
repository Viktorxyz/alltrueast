import mongoose from 'mongoose'
const { Schema } = mongoose

const RolePermissions = new Schema({
	role: {
		type: String,
		required: true
	},
	permission: {
		type: String,
		required: true
	}
}, { timestamps: true })

export default mongoose.model('Role_Permissions', RolePermissions)
