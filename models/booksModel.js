const mongoose = require("mongoose");
//add comment
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    lowercase: true,
  },
  author: String,
  price: {
    type: Number,
    require: true,
  },
  published_date: Date,
});

const Book = mongoose.model("book", bookSchema);

module.exports = Book;
