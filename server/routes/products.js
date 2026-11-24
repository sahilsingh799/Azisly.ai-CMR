import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

router.get('/', async (_, res) => {
  try { res.json(await Product.find().sort({ createdAt: -1 })); }
  catch (error) { res.status(500).json({ message: error.message }); }
});

router.post('/', async (req, res) => {
  try { res.status(201).json(await Product.create(req.body)); }
  catch (error) { res.status(400).json({ message: error.message }); }
});

router.put('/:id', async (req, res) => {
  try {
    const item = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!item) return res.status(404).json({ message: 'Product not found' });
    res.json(item);
  } catch (error) { res.status(400).json({ message: error.message }); }
});

router.delete('/:id', async (req, res) => {
  try { await Product.findByIdAndDelete(req.params.id); res.status(204).end(); }
  catch (error) { res.status(400).json({ message: error.message }); }
});

export default router;
