import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  category: { type: String, default: 'COURSE' },
  description: { type: String, default: '' },
  price: { type: Number, default: 0 },
  unitsSold: { type: Number, default: 0 },
  revenue: { type: Number, default: 0 },
  active: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model('Product', ProductSchema);
