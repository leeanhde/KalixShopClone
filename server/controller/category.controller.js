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

const categoryController = {
  getListProductByC_Id,
};
module.exports = categoryController;
