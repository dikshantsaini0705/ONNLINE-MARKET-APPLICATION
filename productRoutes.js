// routes/productRoutes.js
import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

// Get all products
router.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a product by ID
router.get('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new product
router.post('/api/products', async (req, res) => {
  const { name, description, price, quantity, category } = req.body;

  const product = new Product({
    name,
    description,
    price,
    quantity,
    category,
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

