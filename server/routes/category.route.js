const express = require('express');
const bodyParser = require('body-parser');
const categoryController = require('../controller/category.controller');

const categoryRouter = express.Router();
categoryRouter.use(bodyParser.json());
// router.get('/category/:categoryName/products', categoryController.getListProductByC_Name);

categoryRouter.get('/category/:categoryId/products', categoryController.getListProductByC_Id);
categoryRouter.get('/category', categoryController.getListCatagory);
module.exports = categoryRouter;