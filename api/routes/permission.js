import express from 'express';

import { createPermission, deletePermission, updatePermission, getPermission, getPermissions } from '../controllers/permission.js';
import { verifyAdmin } from '../utils/verify.js';

const router = express.Router();

// CREATE
router.post('/', verifyAdmin, createPermission);
// UPDATE
router.put('/:id', verifyAdmin, updatePermission);
// DELETE
router.delete('/:id', verifyAdmin, deletePermission);
// GET
router.get('/:id', verifyAdmin, getPermission);
// GET ALL
router.get('/', verifyAdmin, getPermissions);

export default router;
