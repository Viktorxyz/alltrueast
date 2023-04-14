import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors';

// routes
import routeAuth from './routes/auth.js';
import routeUser from './routes/user.js';
import routeRole from './routes/role.js';
import routePermission from './routes/permission.js';

import routeService from './routes/service.js';
import routeType from './routes/type.js';
import routeAppointment from './routes/appointment.js';
import routeServiceProvided from './routes/serviceProvided.js';
import routeServiceBooked from './routes/serviceBooked.js';

const app = express();
dotenv.config();

// depricated stuff
mongoose.set('strictQuery', false);

// mongo connection
const connect = async () => {
	try {
		mongoose.connect(process.env.MONGO);
		console.log("Connected to mongoDB.");
	} catch (error) {
		throw error;
	}
};

// middlewares
app.use(cors({ origin: 'http://localhost:5173', credentials: true, methods: 'GET,POST,PUT' }));
app.use(cookieParser());
app.use(express.json());

// User routes
app.use('/api/auth', routeAuth);
app.use('/api/user', routeUser);
app.use('/api/role', routeRole);
app.use('/api/permission', routePermission);

// Appointment routes
app.use('/api/service', routeService);
app.use('/api/type', routeType);
app.use('/api/appointment', routeAppointment);
app.use('/api/serviceprovided', routeServiceProvided);
app.use('/api/servicebooked', routeServiceBooked);

app.use((err, req, res, next) => {
	const errorStatus = err.status || 500;
	const errorMessage = err.message || "Something went wrong";
	return res.status(errorStatus).json({
		success: false,
		status: errorStatus,
		message: errorMessage,
		stack: err.stack
	});
});

// api start
app.listen(8080, () => {
	connect();
	console.log("Connected to backend!!");
});
