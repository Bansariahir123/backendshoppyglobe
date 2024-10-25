import Cart from '../models/Cart.js';
import Product from '../models/Product.js';

// Add a product to the cart
export const addToCart = async (req, res) => {
    const { productId, quantity } = req.body;
  
    // Validation checks
    if (!productId || !quantity || quantity <= 0) {
      return res.status(400).json({ message: 'Product ID and a valid quantity are required' });
    }
  
    try {
      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      // Check if product is already in the cart
      const existingCartItem = await Cart.findOne({ productId, userId: req.userId });
      if (existingCartItem) {
        return res.status(400).json({ message: 'Product already in cart' });
      }
  
      const cartItem = new Cart({
        productId,
        quantity,
        userId: req.userId // Coming from middleware
      });
  
      await cartItem.save();
      res.status(201).json(cartItem);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  

// Update quantity in the cart
export const updateCart = async (req, res) => {
    const { quantity } = req.body;
  
    // Validate quantity
    if (!quantity || quantity <= 0) {
      return res.status(400).json({ message: 'A valid quantity is required' });
    }
    
    try {
      const cartItem = await Cart.findById(req.params.id);
      if (!cartItem) {
        return res.status(404).json({ message: 'Cart item not found' });
      }
  
      cartItem.quantity = quantity;
      await cartItem.save();
      res.status(200).json(cartItem);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  

// Remove product from the cart
export const removeFromCart = async (req, res) => {
  try {
    const cartItem = await Cart.findByIdAndDelete(req.params.id);
    if (!cartItem) {
      return res.status(404).json({ message: 'Cart item not found' });
    }
    res.status(200).json({ message: 'Item removed from cart' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
