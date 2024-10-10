const db = require("../model/index");
const Product = db.product;


async function getDetailById(req, res, next) {
    try {
      const pId = req.params.id;  // Correctly access route parameter
      const product = await Product.findById(pId);
      
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
  
      res.status(200).json(product);
    } catch (error) {
      next(error);  // Pass error to the next middleware (for error handling)
    }
  }
  

const productController = {
  getDetailById,
};

module.exports = productController;
