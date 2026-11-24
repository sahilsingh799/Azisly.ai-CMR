import mongoose from 'mongoose';

const CustomerSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  company: { type: String, default: '' },
  email: { type: String, required: true, lowercase: true, trim: true },
  phone: { type: String, default: '' },
  course: { type: String, default: 'General' },
  value: { type: Number, default: 0 },
  status: { type: String, enum: ['Lead', 'Active', 'Inactive'], default: 'Lead' },
  stage: { type: String, enum: ['New', 'Qualified', 'Proposal', 'Won'], default: 'New' },
  owner: { type: String, default: 'Vikram' }
}, { timestamps: true });

export default mongoose.model('Customer', CustomerSchema);
