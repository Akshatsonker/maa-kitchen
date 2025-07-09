import express from 'express';
import { 
  createOrder, 
  verifyPayment, 
  getPaymentHistory 
} from '../controllers/paymentController.js';
import { paymentValidation } from '../middleware/validation.js';
import { authenticateToken, optionalAuth } from '../middleware/auth.js';

const router = express.Router();

// Create order (can be used by guests or authenticated users)
router.post('/create-order', optionalAuth, paymentValidation, createOrder);

// Verify payment (can be used by guests or authenticated users)
router.post('/verify-payment', optionalAuth, verifyPayment);

// Get payment history (requires authentication)
router.get('/history', authenticateToken, getPaymentHistory);

// Get Razorpay key (public endpoint)
router.get('/key', (req, res) => {
  res.status(200).json({ 
    key: process.env.RAZORPAY_API_KEY 
  });
});

// Health check for payment service
router.get('/health', (req, res) => {
  res.status(200).json({
    service: 'Payment Service',
    status: 'OK',
    timestamp: new Date().toISOString()
  });
});

export default router;