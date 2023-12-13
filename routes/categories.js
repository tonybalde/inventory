// // // const express = require('express');
// // // const router = express.Router();
// // // const Category = require('../models/category');

// // // router.get('/', async (req, res) => {
// // //   try {
// // //     const categories = await Category.find();
// // //     res.render('categories', { categories });
// // //   } catch (err) {
// // //     res.status(500).json({ message: err.message });
// // //   }
// // // });

// // // // Route to render the form for adding a new category
// // // router.get('/new', (req, res) => {
// // //   res.render('addCategory'); // Create a view named 'addCategory.pug' for the form
// // // });

// // // // Route to handle adding a new category
// // // router.post('/new', async (req, res) => {
// // //   const { name, description } = req.body;
// // //   const image = req.file; // Assuming multer is used for file uploads

// // //   try {
// // //     // Logic to save the new category to the database, including the image if applicable
// // //     const newCategory = new Category({ name, description, image });
// // //     await newCategory.save();

// // //     res.redirect('/categories'); // Redirect back to the category list after adding the category
// // //   } catch (err) {
// // //     console.error(err);
// // //     res.status(500).send('Internal Server Error');
// // //   }
// // // });

// // // module.exports = router;

// // const express = require('express');
// // const router = express.Router();
// // const Category = require('../models/category');
// // const multer = require('multer');
// // const path = require('path');

// // // Multer storage configuration
// // const storage = multer.diskStorage({
// //   destination: function(req, file, cb) {
// //     cb(null, 'public/images'); // Set your image destination directory
// //   },
// //   filename: function(req, file, cb) {
// //     cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
// //   },
// // });

// // // Multer upload configuration
// // const upload = multer({
// //   storage: storage,
// //   limits: {
// //     fileSize: 1024 * 1024 * 5, // 5 MB file size limit
// //   },
// // });

// // // GET route to retrieve all categories
// // router.get('/', async (req, res) => {
// //   try {
// //     const categories = await Category.find();
// //     res.render('categories', { categories });
// //   } catch (err) {
// //     res.status(500).json({ message: err.message });
// //   }
// // });

// // // GET route to render the form for adding a new category
// // router.get('/new', (req, res) => {
// //   res.render('addCategory');
// // });

// // // POST route to handle adding a new category
// // router.post('/new', upload.single('image'), async (req, res) => {
// //   const { name, description } = req.body;
// //   const image = req.file ? `/images/${req.file.filename}` : ''; // Get image URL if uploaded

// //   try {
// //     const newCategory = new Category({ name, description, image });
// //     await newCategory.save();

// //     res.redirect('/categories');
// //   } catch (err) {
// //     console.error(err);
// //     res.status(500).send('Internal Server Error');
// //   }
// // });

// // // Controller to handle adding a new category
// // const addCategory = async (req, res) => {
// //   const { name, description } = req.body;
// //   const imageURL = req.file ? `/images/${req.file.filename}` : ''; // Get image URL if uploaded

// //   try {
// //     // Create a new category instance
// //     const newCategory = new Category({ name, description, imageURL });

// //     // Save the new category to the database
// //     await newCategory.save();

// //     res.redirect('/categories'); // Redirect to categories list after successful addition
// //   } catch (err) {
// //     console.error(err);
// //     res.status(500).send('Internal Server Error');
// //   }
// // };

// // module.exports = router;

// const express = require('express');
// const router = express.Router();
// const Category = require('../models/category');

// // Render form for adding a new category
// router.get('/new', (req, res) => {
//   res.render('addCategory'); // Ensure you have the corresponding view
// });

// // Handle addition of a new category
// router.post('/new', async (req, res) => {
//   const { name, description, imageURL } = req.body;

//   try {
//     const newCategory = new Category({
//       name,
//       description,
//       imageURL
//     });

//     await newCategory.save(); // Save the category to the database
//     res.redirect('/categories'); // Redirect to the categories list
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Internal Server Error');
//   }
// });

// // Retrieve all categories
// router.get('/', async (req, res) => {
//   try {
//     const categories = await Category.find();
//     res.render('categories', { categories }); // Ensure you have the corresponding view
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const Category = require('../models/category');

// Render form for adding a new category
router.get('/new', (req, res) => {
  res.render('addCategory'); // Ensure you have the corresponding view
});

// Handle addition of a new category
router.post('/new', async (req, res) => {
  const { name, description, imageURL } = req.body;

  try {
    const newCategory = new Category({
      name,
      description,
      imageURL,
    });

    await newCategory.save(); // Save the category to the database
    res.redirect('/categories'); // Redirect to the categories list
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

// Retrieve all categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.find();
    res.render('categories', { categories }); // Ensure you have the corresponding view
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

