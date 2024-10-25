import Product from '../models/Product.js';

// Get all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get product by ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Create Product:
export const createProduct = async (req, res) => {
    const { name, price, description, stockQuantity } = req.body;
    
    try {
      const newProduct = new Product({
        name,
        price,
        description,
        stockQuantity,
      });
      
      const createdProduct = await newProduct.save();
      res.status(201).json(createdProduct);
    } catch (error) {
      res.status(400).json({ message: 'Error creating product' });
    }
  };

// Update the product:
export const updateProduct = async (req, res) => {
    const { name, price, description, stockQuantity } = req.body;
    
    try {
      const product = await Product.findById(req.params.id);
      
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      product.name = name || product.name;
      product.price = price || product.price;
      product.description = description || product.description;
      product.stockQuantity = stockQuantity || product.stockQuantity;
  
      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } catch (error) {
      res.status(400).json({ message: 'Error updating product' });
    }
  };

// Delete product by ID
export const deleteProductById = async (req, res) => {
    const { id } = req.params;
  
    try {
      // Find and delete the product by ID
      const deletedProduct = await Product.findByIdAndDelete(id);
  
      if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });
  
      res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };