/*
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import signUpRoutes from './src/sign backend/routes/signUpRoutes.js';

// Import your database connection (side effect import)
import './src/sign backend/models/db.js';



const app = express();
const PORT = process.env.PORT || 3000;

app.get('/ping', (req, res) => {
    res.send('pong');
});

app.use(bodyParser.json());
app.use(cors());
app.use('/signUp', signUpRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
*/


import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import signUpRoutes from './src/sign backend/routes/signUpRoutes.js';
import paymentRoutes from './src/payment/backend/routes/paymentRoutes.js';
// Import your database connection (side effect import)
import './src/sign backend/models/db.js';
import Razorpay from 'razorpay';


const app = express();
const PORT = process.env.PORT || 3000;

app.get('/ping', (req, res) => {
    res.send('pong');
});

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use('/api/payments', paymentRoutes);
app.use('/signUp', signUpRoutes);
export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_APT_SECRET,
});

app.get("/api/getkey", (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
);
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
