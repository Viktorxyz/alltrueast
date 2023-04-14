import mongoose from 'mongoose'
const { Schema } = mongoose

const Permission = new Schema({
	name: {
		type: String,
		required: true
	}
}, { timestamps: true })

export default mongoose.model('Permission', Permission)
