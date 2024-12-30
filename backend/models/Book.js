// const mongoose = require("mongoose");

// const bookSchema = new mongoose.Schema({
//     title: 
//     { 
//         type: String, 
//         required: true 
//     },
//     author:
//      { 
//         type: String,
//          required: true
//      },
//     description: 
//     { 
//         type: String,
//          required: true 
//     }, 
//     category: 
//     { 
//         type: String,
//          required: true 
//         },
//     theme:
//      {
//          type: String 
//     }, 
//     publishedYear:
//      { 
//         type: Number,
//          required: true
//          },
//     copiesAvailable:
//      { 
//         type: Number, 
//         required: true
//     },
//     bookImage: 
//     { 
//         type: String 
//     }, 
// });

// module.exports = mongoose.model("Book", bookSchema);
// Backend Code
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    theme: { type: String }, // Optional
    publishedYear: { type: Number, required: true },
    copiesAvailable: { type: Number, required: true },
    bookImage: { type: String }, // Optional, will hold the image filename
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
