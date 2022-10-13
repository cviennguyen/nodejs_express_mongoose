const mongoose = require("mongoose");

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
    min: 10,
    max: 100,
  },
  published_date: Date,
});

const Book = mongoose.model("book", bookSchema);

module.exports = Book;
