const mongoose = require("mongoose");
const Category = require('./category.model');
const Product = require('./product.model');

// Khai bao doi tuong mongoose su dung nhu moi bien global
mongoose.Promise = global.Promise;
// Khai bao 1 doi tuong dai dien db
const db = {};
// Bo sung cac thuoc tinh cho db
db.mongoose = mongoose;
db.category = Category;
db.product = Product;

db.connectDB = async () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: process.env.DB_NAME,
    })
    .then(() => console.log("Connect to mongodb success"))
    .catch((error) => console.error(error.message));
};

module.exports = db;