import express from 'express';
import { createServiceProvided, deleteServiceProvided, getServiceProvided, getServicesProvided, updateServiceProvided } from '../controllers/serviceProvided.js';
import { verifyUser } from '../utils/verify.js';

const router = express.Router();

// CREATE
router.post('/', verifyUser, createServiceProvided);
// UPDATE
router.put('/:id', verifyUser, updateServiceProvided);
// DELETE
router.delete('/:id', verifyUser, deleteServiceProvided);
// GET
router.get('/:id', getServiceProvided);
// GET ALL
router.get('/', getServicesProvided);


export default router;
