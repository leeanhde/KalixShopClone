const express = require('express');
const bodyParser = require('body-parser');
const productController = require('../controller/product.controller');

const productRouter = express.Router();
productRouter.use(bodyParser.json());

productRouter.get('/product/:id', productController.getDetailById);


module.exports = productRouter;