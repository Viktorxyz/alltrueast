import express from 'express';
import { createServiceBooked, deleteServiceBooked, getServiceBooked, getServicesBooked, updateServiceBooked } from '../controllers/serviceBooked.js';
import { verifyUser } from '../utils/verify.js';

const router = express.Router();

// CREATE
router.post('/', verifyUser, createServiceBooked);
// UPDATE
router.put('/:id', verifyUser, updateServiceBooked);
// DELETE
router.delete('/:id', verifyUser, deleteServiceBooked);
// GET
router.get('/:id', getServiceBooked);
// GET ALL
router.get('/', getServicesBooked);


export default router;
