const { Router } = require("express");
const { router_products } = require("./products");

//Routers
const router = Router();

router.use("/productos", router_products);

module.exports = { router };
