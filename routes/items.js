const express = require('express');
const router = express.Router();
const Item = require('../models/items');

router.get('/', async (req, res) => {
  try {
    const items = await Item.find();
    res.render('items', { items });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Render the form for adding a new item
router.get('/new', (req, res) => {
  res.render('addItem'); // Create a view named 'addItem.pug' for the form
});

// Handle adding a new item
router.post('/new', async (req, res) => {
  const { name, description, category, price, numberInStock, imageURL } = req.body;

  try {
    const newItem = new Item({
      name,
      description,
      category,
      price,
      numberInStock,
      imageURL,
    });

    await newItem.save(); // Save the item to the database
    res.redirect('/items'); // Redirect to the items list
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});


module.exports = router;
