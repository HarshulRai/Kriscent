const Product = require('../models/Product');



class ProductService {

  static async getAllProducts() {

    try {

      const products = await Product.getAllProducts();

      return products;

    } catch (error) {

      throw error;

    }

  }



  static async searchProducts(query) {

    try {

      const products = await Product.searchProducts(query);

      return products;

    } catch (error) {

      throw error;

    }

  }

}



module.exports = ProductService;
