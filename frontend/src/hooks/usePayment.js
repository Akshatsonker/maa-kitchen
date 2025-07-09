import { useState } from 'react';
import { paymentAPI } from '../config/api';

export const usePayment = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const createOrder = async (orderData) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await paymentAPI.createOrder(orderData);
      return response.data;
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Failed to create order';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const processPayment = async (orderData, userDetails = {}) => {
    try {
      setLoading(true);
      setError(null);

      // Load Razorpay script
      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        throw new Error('Razorpay SDK failed to load. Please check your internet connection.');
      }

      // Create order
      const orderResponse = await createOrder(orderData);
      if (!orderResponse.success) {
        throw new Error(orderResponse.message || 'Failed to create order');
      }

      const { order, key } = orderResponse;

      // Configure Razorpay options
      const options = {
        key: key,
        amount: order.amount,
        currency: order.currency,
        name: 'Maa\'s Kitchen',
        description: orderData.description || 'Food Order',
        order_id: order.id,
        handler: async (response) => {
          try {
            // Verify payment
            const verificationData = {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              amount: orderData.amount,
              order_details: orderData.order_details
            };

            const verifyResponse = await paymentAPI.verifyPayment(verificationData);
            
            if (verifyResponse.data.success) {
              return {
                success: true,
                paymentId: response.razorpay_payment_id,
                orderId: response.razorpay_order_id
              };
            } else {
              throw new Error('Payment verification failed');
            }
          } catch (verifyError) {
            console.error('Payment verification error:', verifyError);
            throw verifyError;
          }
        },
        prefill: {
          name: userDetails.name || '',
          email: userDetails.email || '',
          contact: userDetails.phone || ''
        },
        notes: {
          address: userDetails.address || ''
        },
        theme: {
          color: '#f97316' // Orange color matching your theme
        },
        modal: {
          ondismiss: () => {
            setLoading(false);
            setError('Payment cancelled by user');
          }
        }
      };

      return new Promise((resolve, reject) => {
        const paymentObject = new window.Razorpay({
          ...options,
          handler: async (response) => {
            try {
              const result = await options.handler(response);
              resolve(result);
            } catch (error) {
              reject(error);
            } finally {
              setLoading(false);
            }
          }
        });

        paymentObject.open();
      });

    } catch (err) {
      setLoading(false);
      const errorMessage = err.message || 'Payment processing failed';
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  };

  const getPaymentHistory = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await paymentAPI.getHistory();
      return response.data;
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Failed to fetch payment history';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    createOrder,
    processPayment,
    getPaymentHistory
  };
};