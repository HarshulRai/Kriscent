const express = require('express');

const router = express.Router();

const ProductService = require('../services/productService');



router.get('/products', async (req, res) => {

  try {

    const products = await ProductService.getAllProducts();

    res.json(products);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

});



router.get('/products/search', async (req, res) => {

  const { query } = req.query;

  try {

    const products = await ProductService.searchProducts(query);

    res.json(products);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

});



module.exports = router;
