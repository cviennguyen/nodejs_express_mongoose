const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv");

const app = require("./app");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

const SERVER_PORT = process.env.SERVER_PORT;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection successful!"));

app.listen(SERVER_PORT, () => {
  console.log(`Server running at http://localhost:${SERVER_PORT}/`);
});
