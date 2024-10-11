const db = require("../model/index");
const Category = db.category;

async function getListProductByC_Id(req, res, next) {
  try {
    const categoryId = req.params.categoryId; // assuming category ID is passed as a URL parameter
    const category = await Category.findById(categoryId).populate("products"); // fetch category by ID and populate products

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    // Send the list of products in the response
    res.status(200).json(category.products);
  } catch (error) {
    next(error);
  }
}

async function getListCatagory(req, res, next) {
  try {
    const list = await Category.find().populate("products");
    const newList = list.map(c => ({
      _id: c._id,
      name: c.name,
      products: c.products 
    }));
    res.status(200).json(newList);
  } catch (error) {
    next(error);
  }
}

const categoryController = {
  getListProductByC_Id,getListCatagory
};
module.exports = categoryController;
