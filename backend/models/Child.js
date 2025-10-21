import mongoose from 'mongoose';

const childSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  tutorId: { type: String, required: false },
  note: { type: String, required: false },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Child', childSchema);