import express from 'express';

import { createAppointment, updateAppointment, deleteAppointment, getAppointment, getAppointments } from '../controllers/appointment.js';
import { verifyUser } from '../utils/verify.js';

const route = express.Router();

// CREATE
route.post('/', verifyUser, createAppointment);
// UPDATE
route.put('/:id', verifyUser, updateAppointment);
// DELETE
route.delete('/:id', verifyUser, deleteAppointment);
// GET
route.get('/:id', verifyUser, getAppointment);
// GET ALL
route.get('/', verifyUser, getAppointments);

export default route;
