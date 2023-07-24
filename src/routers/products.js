const { Router } = require("express");
const { addProduct, getProducts } = require("../controllers/products");

//Routers
const router_products = Router();

//ENDPOINTS DE PRODUCTO
router_products.get("/", getProducts);

router_products.post("/", addProduct);

router_products.put("/", (req, res) => {
  res.json({ success: true, response: "productos" });
});

router_products.delete("/", (req, res) => {
  res.json({ success: true, response: "productos" });
});

module.exports = { router_products };
