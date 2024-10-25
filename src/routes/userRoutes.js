import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';

const router = express.Router();

// Route to register a new user
router.post('/register', registerUser);

// Route to log in a user and return a JWT token
router.post('/login', loginUser);

export default router;
