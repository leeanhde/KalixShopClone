const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String
  },
  options: [{    
    material: { 
      type: String
    },
    price: { 
      type: Number
    }
  }],
  size: { 
    type: String
  },
  images: [{
    url: String
  }],
  description: {
    type: String,
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
