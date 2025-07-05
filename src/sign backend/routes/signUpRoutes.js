import { signUpValidation, signInValidation } from '../middlewares/signUpValidation.js';
import { signUp, signIn } from '../controllers/signUpController.js';
import express from 'express';

const router = express.Router();

router.post('/signUp', signUpValidation, signUp);
router.post('/signIn', signInValidation, signIn);

export default router;
