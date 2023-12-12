const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  URL: {
    type: String,
    required: true,
  },
  // Other properties specific to a category
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
