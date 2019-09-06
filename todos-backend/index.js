const express = require("express");
const app = express();
const cors = require("cors");// allows us to make cross origin
// requests from port 3001 to 3000
const morgan = require("morgan");
const bodyParser = require("body-parser");
const todoRoutes = require("./routes/todos");

app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(cors());
app.use("/api/todos", todoRoutes);

app.use(function(req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: err
  });
});

app.listen(3001, function() {
  console.log("Server starting on port 3000");
});
