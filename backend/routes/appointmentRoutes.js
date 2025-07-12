import express from 'express';
import { 
  createAppointment, 
  getAppointments, 
  getAllAppointments,
  updateAppointment, 
  cancelAppointment 
} from '../controllers/appointmentController.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

router.post('/', protect, authorize('patient'), createAppointment);
router.get('/', protect, getAppointments);
router.get('/all', protect, getAllAppointments);
router.put('/:id', protect, updateAppointment);
router.delete('/:id', protect, cancelAppointment);

export default router;