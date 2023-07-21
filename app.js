//Importar librerias
const express = require("express");
require("dotenv").config();

//Crear app
const app = express();

const PORT = process.env.PORT || 8080;

//ENDPOINTS
app.get("/", (req, res) => {
  res.json({
    success: true,
    response: "Server ON",
  });
});

//ENDPOINTS DE PRODUCTO
app.get("/api/products", (req, res) => {
  res.json({ success: true, response: "productos" });
});

app.post("/api/products", (req, res) => {
  res.json({ success: true, response: "productos" });
});

app.put("/api/products", (req, res) => {
  res.json({ success: true, response: "productos" });
});

app.delete("/api/products", (req, res) => {
  res.json({ success: true, response: "productos" });
});

//Inicializar server
app.listen(PORT, () => {
  console.log(`Server initialized in port: ${PORT}`);
});
