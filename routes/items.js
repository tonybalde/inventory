// const express = require('express');
// const router = express.Router();
// const Item = require('../models/items');

// router.get('/items', async (req, res) => {
//   try {
//     const items = await Item.find();
//     res.render('items', { items });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// module.exports = router;

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

module.exports = router;
