import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import customersRouter from './routes/customers.js';
import tasksRouter from './routes/tasks.js';
import productsRouter from './routes/products.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/customers', customersRouter);
app.use('/api/tasks', tasksRouter);
app.use('/api/products', productsRouter);
app.get('/api/health', (_, res) => res.json({ status: 'ok' }));

const port = process.env.PORT || 5000;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/azisly-crm')
  .then(() => app.listen(port, () => console.log(`Azisly CRM API running on port ${port}`)))
  .catch(error => { console.error('MongoDB connection failed:', error.message); process.exit(1); });
