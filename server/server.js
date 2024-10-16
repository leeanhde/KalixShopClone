require("dotenv").config();
const express = require("express");
const cors = require('cors');
const morgan = require("morgan");
const httpErrors = require("http-errors");
const bodyParser = require("body-parser");
const db = require("./model/index");
const product = require('./routes/product.route');
const category = require('./routes/category.route');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));
//router toi web root
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to RestFul API",
  });
});

//tiep nhan cac request tu Client
app.use('/api', product);
app.use('/api', category);
// kiem soat url ko xac dinh
app.use(async (req, res, next) => {
  next(httpErrors.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
});

// tiep nhan cac req
app.listen(process.env.PORT || 8080, process.env.HOST_NAME, () => {
  console.log(
    `Server is running at: ${process.env.HOST_NAME}:${process.env.PORT}`
  );
  db.connectDB();
});