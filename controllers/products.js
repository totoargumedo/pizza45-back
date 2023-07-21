const { Product } = require("../models/Product.model");

//agregar producto a DB
const addProduct = async (req, res) => {
  try {
    const one = req.body;
    if (
      !one.name ||
      !one.description ||
      !one.price ||
      !one.category ||
      !one.image
    ) {
      return res.status(400).json({ success: false, response: "Data missing" });
    }
    const newProduct = await Product.create(one);
    res.status(201).json({ success: true, response: newProduct });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addProduct };
