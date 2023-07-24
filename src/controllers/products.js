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

// traer un producto
const getOneProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const one = await Product.findById(id);
    if (!one) {
      return res.status(200).json({
        success: true,
        response: "Product not found",
      });
    }
    return res.status(200).json({ success: true, response: one });
  } catch (error) {
    next(error);
  }
};

//traer productos cargados
const getProducts = async (req, res, next) => {
  try {
    const { category } = req.query;
    if (category) {
      const all = await Product.find({ category: category });
      if (all.length == 0) {
        return res.status(200).json({
          success: true,
          response: `No products in category ${category} in DB`,
        });
      }
      return res.status(200).json({ success: true, response: all });
    } else {
      const all = await Product.find({});
      if (all.length == 0) {
        return res
          .status(200)
          .json({ success: true, response: "No products in DB" });
      }
      return res.status(200).json({ success: true, response: all });
    }
  } catch (error) {
    next(error);
  }
};

// Actualizar producto
const updateProduct = async (req, res, next) => {
  try {
    const one = await Product.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    if (!one) {
      return res.status(200).json({
        success: true,
        response: "Product not found",
      });
    }

    return res.status(200).json({ success: true, response: one });
  } catch (error) {
    next(error);
  }
};
const deleteProduct = async (req, res, next) => {
  try {
    const one = await Product.findOneAndDelete({ _id: req.params.id });

    if (!one) {
      return res.status(200).json({
        success: true,
        response: "Product not found",
      });
    }

    return res.status(200).json({ success: true, response: one._id });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addProduct,
  getProducts,
  getOneProduct,
  updateProduct,
  deleteProduct,
};
