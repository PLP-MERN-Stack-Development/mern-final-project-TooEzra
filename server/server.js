import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import postRoutes from './routes/posts.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Global error handler
app.use((err, req, res, next) => {
  console.error('UNHANDLED ERROR:', err);
  res.status(500).json({ message: 'Server Error', error: err.message });
});

app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

app.get('/', (req, res) => res.send('Ezra MERN Blog API Running!'));

const PORT = process.env.PORT || 5000;

console.log('Attempting to connect to MongoDB...');
console.log('URI:', process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB Connected Successfully!');
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
      //console.log(`Register now: http://localhost:5173/register`);
    });
  })
  .catch(err => {
    console.error('MongoDB CONNECTION FAILED');
    console.error('ERROR:', err.message);
    process.exit(1);
  });
