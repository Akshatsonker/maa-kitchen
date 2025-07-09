import express from 'express';
import { signUpValidation, signInValidation } from '../middleware/validation.js';
import { signUp, signIn, getProfile } from '../controllers/authController.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.post('/signup', signUpValidation, signUp);
router.post('/signin', signInValidation, signIn);

// Protected routes
router.get('/profile', authenticateToken, getProfile);

// Health check for auth service
router.get('/health', (req, res) => {
  res.status(200).json({
    service: 'Authentication Service',
    status: 'OK',
    timestamp: new Date().toISOString()
  });
});

export default router;