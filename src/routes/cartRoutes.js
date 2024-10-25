import express from 'express';
import { addToCart, updateCart, removeFromCart } from '../controllers/cartController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

// Route to add a product to the cart (protected route)
router.post('/', authMiddleware, addToCart);

// Route to update the quantity of a product in the cart (protected route)
router.put('/:id', authMiddleware, updateCart);

// Route to remove a product from the cart (protected route)
router.delete('/:id', authMiddleware, removeFromCart);

export default router;
