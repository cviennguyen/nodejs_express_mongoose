const express = require("express");
const booksRoutes = require("./routes/bookRoute");

const app = express();

app.use(express.json());

app.use("/api/v1/", booksRoutes);

app.route("/").get((req, res) => {
  res.send("<h1>MogoDB + Mongoose Example</h1>");
});

module.exports = app;
