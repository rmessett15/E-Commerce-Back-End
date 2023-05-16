// Import
const { Category } = require("../models");

// Category seed data
const categoryData = [
  {
    category_name: "Shirts",
  },
  {
    category_name: "Shorts",
  },
  {
    category_name: "Music",
  },
  {
    category_name: "Hats",
  },
  {
    category_name: "Shoes",
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

// Export
module.exports = seedCategories;
