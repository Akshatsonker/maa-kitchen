// MaaKitchen - Payment Controllers for Razorpay Integration
// This file contains the logic for creating orders and verifying payments using Razorpay's API.
import Razorpay from 'razorpay';
import dotenv from 'dotenv';
import crypto from 'crypto';


// Load environment variables
dotenv.config();

// Verify environment variables are loaded
if (!process.env.RAZORPAY_API_KEY || !process.env.RAZORPAY_API_SECRET) {
  throw new Error('Razorpay credentials missing in environment variables');
}

// Initialize Razorpay
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET
});

export { razorpay };

export const createOrder = async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount || isNaN(amount)) {
      return res.status(400).json({ 
        success: false, 
        message: "Valid amount is required" 
      });
    }

    const options = {
      amount: Math.round(amount * 100),
      currency: "INR",
      receipt: `receipt_${Date.now()}`
    };

    const order = await razorpay.orders.create(options);
    
    res.status(200).json({ 
      success: true, 
      order 
    });
  } catch (error) {
    console.error("Razorpay Error:", error);
    res.status(500).json({ 
      success: false, 
      message: "Failed to create order",
      error: error.error ? error.error.description : error.message 
    });
  }
};

export const verifyPayment = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({ 
        success: false, 
        message: "Invalid payment verification data" 
      });
    }

    const body = `${razorpay_order_id}|${razorpay_payment_id}`;

    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest('hex');

    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {
      return res.status(200).json({ 
        success: true, 
        message: "Payment verified successfully",
        paymentId: razorpay_payment_id
      });
    }

    res.status(400).json({ 
      success: false, 
      message: "Payment verification failed" 
    });
  } catch (error) {
    console.error("Verification Error:", error);
    res.status(500).json({ 
      success: false, 
      message: "Internal server error during verification" 
    });
  }
};