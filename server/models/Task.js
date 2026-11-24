import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  time: { type: String, default: '5:00 PM' },
  type: { type: String, default: 'Task' },
  priority: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Medium' },
  done: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model('Task', TaskSchema);
