import express from 'express';
import { getUsers, getDoctors, getPatients } from '../controllers/userController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.get('/', protect, getUsers);
router.get('/doctors', protect, getDoctors);
router.get('/patients', protect, getPatients);

export default router;