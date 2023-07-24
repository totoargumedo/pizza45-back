const { model, Schema } = require("mongoose");

const collection = "productos";

const productSchema = Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  size: {
    type: String,
    enum: ["chica", "mediana", "grande"],
    default: "mediana",
  },
  status: {
    type: Boolean,
    default: false,
  },
  category: {
    type: String,
    required: true,
  },
});

const Product = model(collection, productSchema);

module.exports = { Product };
