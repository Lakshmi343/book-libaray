
const Book = require("../models/Book");

exports.createBook = async (req, res) => {
    try {
        const { title, author, description, category, theme, publishedYear, copiesAvailable } = req.body;

        if (!title || !author || !category || !description || !publishedYear || !copiesAvailable) {
            return res.status(400).json({ message: "All required fields must be filled." });
        }

        // Ensure multer uploaded the file
        const bookImage = req.file ? req.file.filename : null;

        const newBook = new Book({
            title,
            author,
            description,
            category,
            theme,
            publishedYear,
            copiesAvailable,
            bookImage,
        });

        await newBook.save();

        res.status(201).json({ message: "Book created successfully", newBook });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while creating the book", error: error.message });
    }
};



// Update an existing book
exports.updateBook = async (req, res) => {
    try {
        const bookId = req.params.id;
        const updateData = {
            title: req.body.title,
            slug: req.body.slug,
            author: req.body.author,
            stars: req.body.stars,
            description: req.body.description,
            category: req.body.category,
            publishedYear: req.body.publishedYear,
            copiesAvailable: req.body.copiesAvailable,
        };

        if (req.file) {
            updateData.thumbnail = req.file.filename;
        }

        const updatedBook = await Book.findByIdAndUpdate(bookId, updateData, { new: true });
        res.status(200).json({ message: "Book updated successfully", updatedBook });
    } catch (error) {
        res.status(500).json({ message: "An error occurred while updating the book", error: error.message });
    }
};

// Get all books
// exports.getAllBooks = async (req, res) => {
//     try {
//         const books = await Book.find({});
//         res.status(200).json({ books });
//     } catch (error) {
//         res.status(500).json({ message: "An error occurred while fetching all books", error: error.message });
//     }
// };
exports.getAllBooks = async (req, res) => {
    try {
      // Fetch all books from the database
      const books = await Book.find({}).select(
        "title author category bookImage slug"
      );
  
      res.status(200).json({ books });
    } catch (error) {
      console.error("Error fetching books:", error.message);
      res.status(500).json({
        message: "An error occurred while fetching all books",
        error: error.message,
      });
    }
  };
  

// Get a single book by slug
exports.getSingleBook = async (req, res) => {
    try {
        const { slug } = req.params;
        const book = await Book.findOne({ slug });
        if (!book) return res.status(404).json({ message: "Book not found" });
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: "An error occurred while fetching the book", error: error.message });
    }
};

// Delete a book
exports.deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        await Book.findByIdAndDelete(id);
        res.status(200).json({ message: "Book deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "An error occurred while deleting the book", error: error.message });
    }
};

// Filter books by category
exports.filterByCategory = async (req, res) => {
    try {
        const { category } = req.params;
        const books = await Book.find({ category });
        res.status(200).json({ books });
    } catch (error) {
        res.status(500).json({ message: "Error filtering books by category", error: error.message });
    }
};

// Filter books by author
exports.filterByAuthor = async (req, res) => {
    try {
        const { author } = req.params;
        const books = await Book.find({ author });
        res.status(200).json({ books });
    } catch (error) {
        res.status(500).json({ message: "Error filtering books by author", error: error.message });
    }
};

// Filter books by theme
exports.filterByTheme = async (req, res) => {
    try {
        const { theme } = req.params;
        const books = await Book.find({ theme });
        res.status(200).json({ books });
    } catch (error) {
        res.status(500).json({ message: "Error filtering books by theme", error: error.message });
    }
};