import mongoose from 'mongoose';

const PaymentSchema = new mongoose.Schema({
  razorpay_order_id: {
    type: String,
    required: [true, 'Razorpay order ID is required'],
    trim: true
  },
  razorpay_payment_id: {
    type: String,
    required: [true, 'Razorpay payment ID is required'],
    trim: true
  },
  razorpay_signature: {
    type: String,
    required: [true, 'Razorpay signature is required'],
    trim: true
  },
  amount: {
    type: Number,
    required: [true, 'Payment amount is required'],
    min: [1, 'Amount must be greater than 0']
  },
  currency: {
    type: String,
    default: 'INR',
    uppercase: true
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'failed', 'refunded'],
    default: 'pending'
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false // Optional if guest checkout is allowed
  },
  order_details: {
    items: [{
      product_id: String,
      name: String,
      quantity: Number,
      price: Number
    }],
    total_amount: Number
  }
}, {
  timestamps: true
});

// Index for faster queries
PaymentSchema.index({ razorpay_payment_id: 1 });
PaymentSchema.index({ user_id: 1 });
PaymentSchema.index({ status: 1 });

export const Payment = mongoose.model('Payment', PaymentSchema);