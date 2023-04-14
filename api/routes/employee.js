import express from 'express';

import { createEmployee, deleteEmployee, updateEmployee, getEmployee, getEmployees } from '../controllers/employee.js';
import { verifyEmployee, verifyAdmin } from '../utils/verify.js';

const router = express.Router();

// router.get('/checkauth', verifyToken, (req, res, next) => {
//     res.send('User is authenticated.');
// });

// router.get('/checkuser/:id', verifyUser, (req, res, next) => {
//     res.send('User is checked, and can do all your operations.');
// });

// router.get('/checkadmin', verifyAdmin, (req, res, next) => {
//     res.send('User is admin.');
// });

// CREATE
router.post('/', verifyAdmin, createEmployee);
// UPDATE
router.put('/:id', verifyEmployee, updateEmployee);
// DELETE
router.delete('/:id', verifyEmployee, deleteEmployee);
// GET
router.get('/:id', verifyEmployee, getEmployee);
// GET ALL
router.get('/', verifyEmployee, getEmployees);

export default router;
