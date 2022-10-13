const Book = require("../models/booksModel");

exports.getAllBooks = async (req, res) => {
  try {
    //1 Filtering
    //build query
    const queryObj = { ...req.query }; //make shallow copy
    const excludedFields = ["page", "sort", "limit", "fields"];
    excludedFields.forEach((el) => delete queryObj[el]); //delete all excluded field in query object

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    let query = Book.find(JSON.parse(queryStr)); //result a query so we can chain another query

    //2 sorting
    if (req.query.sort) {
      query = query.sort(req.query.sort); // chaining query
    }

    //execute query
    const books = await query;
    res.send(books);
  } catch (err) {
    res.status(401).send({
      status: "fail",
      err: err,
    });
  }
};

exports.createBook = async (req, res) => {
  try {
    Book.create(req.body);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.updateBook = async (req, res) => {
  try {
    const updateBook = await Book.findByIdAndUpdate(
      req.params.bookid,
      req.body
    );
    res.status(200).send(updateBook);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const deleteBook = await Book.findByIdAndDelete(req.params.bookid);
    if (!deleteBook) {
      res.status(400).send({ message: "No book to delete" });
    }
    res.status(201).send(deleteBook);
  } catch (err) {
    res.status(400).send(err);
  }
};

exports.getBook = async (req, res) => {
  const book = await Book.findById(req.params.bookid);
  res.send(book);
};
