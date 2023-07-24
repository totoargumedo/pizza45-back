const { Router } = require("express");
const {
  addProduct,
  getProducts,
  getOneProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products");

//Routers
const router_products = Router();

//ENDPOINTS DE PRODUCTO
router_products.get("/", getProducts);
// obtener un producto
router_products.get("/:id", getOneProduct);

// Actualizar Producto

router_products.post("/", addProduct);

router_products.put("/:id", updateProduct);

router_products.delete("/:id", deleteProduct);

module.exports = { router_products };
