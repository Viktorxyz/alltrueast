import express from 'express';

import { createRole, deleteRole, updateRole, getRole, getRoles } from '../controllers/role.js'
import { verifyAdmin } from '../utils/verify.js'

const router = express.Router()

// CREATE
router.post('', verifyAdmin, createRole)
// UPDATE
router.put('/:id', verifyAdmin, updateRole)
// DELETE
router.delete('/:id', verifyAdmin, deleteRole)
// GET
router.get('/:id', verifyAdmin, getRole)
// GET ALL
router.get('/', verifyAdmin, getRoles)

export default router
