import express from 'express';
import Customer from '../models/Customer.js';
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const query = req.query.search ? { $or: [{ name: { $regex: req.query.search, $options: 'i' } }, { company: { $regex: req.query.search, $options: 'i' } }, { email: { $regex: req.query.search, $options: 'i' } }] } : {};
    res.json(await Customer.find(query).sort({ createdAt: -1 }));
  } catch (error) { res.status(500).json({ message: error.message }); }
});
router.post('/', async (req, res) => { try { res.status(201).json(await Customer.create(req.body)); } catch (error) { res.status(400).json({ message: error.message }); } });
router.put('/:id', async (req, res) => { try { const item = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }); if (!item) return res.status(404).json({ message: 'Customer not found' }); res.json(item); } catch (error) { res.status(400).json({ message: error.message }); } });
router.delete('/:id', async (req, res) => { try { await Customer.findByIdAndDelete(req.params.id); res.status(204).end(); } catch (error) { res.status(400).json({ message: error.message }); } });
export default router;
