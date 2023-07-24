const { Product } = require("../models/Product.model");

//agregar producto a DB
const addProduct = async (req, res, next) => {
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
    next(error);
  }
};

//traer productos cargados
const getProducts = async (req, res, next) => {
  try {
    const all = await Product.find({});
    if (all.length == 0) {
      return res
        .status(200)
        .json({ success: true, response: "No products in DB" });
    }
    return res.status(200).json({ success: true, response: all });
  } catch (error) {
    next(error);
  }
};

module.exports = { addProduct, getProducts };
