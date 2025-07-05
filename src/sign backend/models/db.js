import 'dotenv/config';
import mongoose from 'mongoose';
console.log('MONGO_CONN:', process.env.MONGO_CONN);

mongoose.connect(process.env.MONGO_CONN, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.error('MongoDB connection error:', err));