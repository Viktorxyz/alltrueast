import express from 'express';

import { deleteUser, updateUser, getUser, getUsers } from '../controllers/user.js';
import { verifyAdmin, verifyUser } from '../utils/verify.js';

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

// UPDATE
router.put('/:id', verifyUser, updateUser);
// DELETE
router.delete('/:id', verifyUser, deleteUser);
// GET
router.get('/:id', verifyUser, getUser);
// GET ALL
router.get('/', verifyAdmin, getUsers);

export default router;
