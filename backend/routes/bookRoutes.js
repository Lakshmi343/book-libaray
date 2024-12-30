const express = require("express");
const upload = require("../config/uploadConfig"); 
const {
  createBook,
  updateBook,
  getAllBooks,
  getSingleBook,
  deleteBook,
  filterByCategory,
  filterByAuthor,
  filterByTheme,
} = require("../controllers/bookController");

const router = express.Router();

// Routes
router.post("/createbook", upload.single("bookImage"), createBook);
router.put("/updatebook/:id", upload.single("bookImage"), updateBook); // Handle optional thumbnail update
router.get("/getallbooks", getAllBooks);
router.get("/singlebook/:slug", getSingleBook);
router.delete("/deletebook/:id", deleteBook);
router.get("/filter/category/:category", filterByCategory);
router.get("/filter/author/:author", filterByAuthor);
router.get("/filter/theme/:theme", filterByTheme);

module.exports = router;

