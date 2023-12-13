// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'CIA (Computer Inventory App)' });
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const Category = require('../models/category');
const Item = require('../models/items');

router.get('/', async (req, res) => {
  try {
    const categoriesCount = await Category.countDocuments();
    const itemsCount = await Item.countDocuments();

    res.render('index', {
      title: 'CIA (Computer Inventory App)',
      categoriesCount,
      itemsCount,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
