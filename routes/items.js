const express = require('express');
const router = express.Router();
const Item = require('../models/items');

router.get('/items', async (req, res) => {
  try {
    const items = await Item.find().populate('category').exec(); // Assuming category is a ref in items
    res.render('items', { items });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
