import Razorpay from 'razorpay';
import crypto from 'crypto';
import { Payment } from '../models/Payment.js';
import dotenv from 'dotenv';

dotenv.config();

// Initialize Razorpay
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET
});

export const createOrder = async (req, res) => {
  try {
    const { amount, currency = 'INR', receipt, order_details } = req.body;

    // Validate amount
    if (!amount || isNaN(amount) || amount <= 0) {
      return res.status(400).json({ 
        success: false, 
        message: "Valid amount is required and must be greater than 0" 
      });
    }

    const options = {
      amount: Math.round(amount * 100), // Convert to paise
      currency,
      receipt: receipt || `receipt_${Date.now()}`,
      payment_capture: 1
    };

    const order = await razorpay.orders.create(options);
    
    // Save order details to database (optional)
    const paymentRecord = new Payment({
      razorpay_order_id: order.id,
      razorpay_payment_id: '', // Will be updated after payment
      razorpay_signature: '', // Will be updated after verification
      amount: amount,
      currency: currency,
      status: 'pending',
      order_details: order_details || {}
    });
    
    // Don't save yet, wait for payment completion
    
    res.status(200).json({ 
      success: true, 
      order,
      key: process.env.RAZORPAY_API_KEY
    });
  } catch (error) {
    console.error("Create order error:", error);
    res.status(500).json({ 
      success: false, 
      message: "Failed to create order",
      error: error.message
    });
  }
};

export const verifyPayment = async (req, res) => {
  try {
    const { 
      razorpay_order_id, 
      razorpay_payment_id, 
      razorpay_signature,
      amount,
      order_details 
    } = req.body;

    // Validate required fields
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({ 
        success: false, 
        message: "Missing required payment verification data" 
      });
    }

    // Create signature for verification
    const body = `${razorpay_order_id}|${razorpay_payment_id}`;
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_API_SECRET)
      .update(body)
      .digest('hex');

    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {
      // Save successful payment to database
      const payment = new Payment({
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
        amount: amount || 0,
        status: 'completed',
        order_details: order_details || {},
        user_id: req.user?.userId || null // If user is authenticated
      });

      await payment.save();

      return res.status(200).json({ 
        success: true, 
        message: "Payment verified successfully",
        paymentId: razorpay_payment_id,
        orderId: razorpay_order_id
      });
    }

    // Payment verification failed
    const failedPayment = new Payment({
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      amount: amount || 0,
      status: 'failed',
      order_details: order_details || {},
      user_id: req.user?.userId || null
    });

    await failedPayment.save();

    res.status(400).json({ 
      success: false, 
      message: "Payment verification failed" 
    });
  } catch (error) {
    console.error("Payment verification error:", error);
    res.status(500).json({ 
      success: false, 
      message: "Internal server error during payment verification",
      error: error.message 
    });
  }
};

export const getPaymentHistory = async (req, res) => {
  try {
    const userId = req.user?.userId;
    
    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Authentication required"
      });
    }

    const payments = await Payment.find({ user_id: userId })
      .sort({ createdAt: -1 })
      .select('-razorpay_signature'); // Don't send signature in response

    res.status(200).json({
      success: true,
      payments
    });
  } catch (error) {
    console.error("Get payment history error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch payment history",
      error: error.message
    });
  }
};