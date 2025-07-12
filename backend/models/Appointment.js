import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: Date,
    required: [true, 'Date is required']
  },
  time: {
    type: String,
    required: [true, 'Time is required']
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled', 'completed'],
    default: 'pending'
  },
  reason: {
    type: String,
    required: [true, 'Reason for appointment is required']
  },
  notes: {
    type: String
  }
}, {
  timestamps: true
});

// Prevent double booking
appointmentSchema.index({ doctor: 1, date: 1, time: 1 }, { 
  unique: true,
  partialFilterExpression: { status: { $ne: 'cancelled' } }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);
export default Appointment;