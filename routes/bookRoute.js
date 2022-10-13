const express = require("express");
const routes = express.Router();
const bookController = require("../controllers/bookController");

routes
  .route("/books")
  .get(bookController.getAllBooks)
  .post(bookController.createBook);

routes
  .route("/book/:bookid")
  .get(bookController.getBook)
  .patch(bookController.updateBook)
  .delete(bookController.deleteBook);

/*
      {
        "title":"Let Us C",
        "author":"Pritesh",
        "price":10.75,
        "published_date":"10-12-2022"
      } 
*/

//Get All Books in sorted order
// routes.get("/books/sort", (req, res) => {
//   res.send({ message: "Get All Books in sorted order" });
// });

module.exports = routes;
