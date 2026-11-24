import express from 'express';
import Task from '../models/Task.js';
const router = express.Router();

router.get('/', async (_, res) => { try { res.json(await Task.find().sort({ createdAt: -1 })); } catch (error) { res.status(500).json({ message: error.message }); } });
router.post('/', async (req, res) => { try { res.status(201).json(await Task.create(req.body)); } catch (error) { res.status(400).json({ message: error.message }); } });
router.put('/:id', async (req, res) => { try { const item = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }); if (!item) return res.status(404).json({ message: 'Task not found' }); res.json(item); } catch (error) { res.status(400).json({ message: error.message }); } });
router.delete('/:id', async (req, res) => { try { await Task.findByIdAndDelete(req.params.id); res.status(204).end(); } catch (error) { res.status(400).json({ message: error.message }); } });
export default router;
