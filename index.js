const express = require("express");
const app = express();

// load configuration from env

const PORT = process.env.PORT || 4000;

// middleware to parse json req body
app.use(express.json());

// import routes for todo api

const todoRoutes = require("./routes/todo");

app.use("/api/v1", todoRoutes);

app.listen(PORT, () => {
  console.log("listening on port");
});
// connect db
const dbConnect = require("./config/database");
dbConnect();

// default route
app.get("/", (req, res) => {
  res.send(`<h1>this is body of gome</h1>`);
});
