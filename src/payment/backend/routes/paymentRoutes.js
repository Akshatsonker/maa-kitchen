import express from "express";
import {
  createOrder,
  verifyPayment
} from "../controllers/paymentControllers.js";

const router = express.Router();

router.route("/createOrder").post(createOrder);

router.route("/verifypayment").post(verifyPayment);

export default router;