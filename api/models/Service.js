import mongoose from 'mongoose';

const { Schema } = mongoose;

const Service = new Schema({
    name:{
	type: String,
	required: true
    },
    price:{
	type: Number,
	required: true
    },
    description:{
	type: String
    },
    type:{
	type: [String],
	required: true
    },
    images:{
	type: [String],
	required: true
    },
    duration:{
	type: Number,
	required: true
    },
    points:{
	type: Number,
	required: true
    }
}, {timestamps: true});

export default mongoose.model('Service', Service);
