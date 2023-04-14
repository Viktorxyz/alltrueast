import mongoose from 'mongoose';

const { Schema } = mongoose;

const Type = new Schema({
    name:{
	type: String,
	required: true
    },
    images:{
	type: [String]
    },
    description:{
	type: String
    }
}, { timestamps: true });

export default mongoose.model('Type', Type);
