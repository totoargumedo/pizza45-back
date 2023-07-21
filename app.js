//Importar librerias
const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
//Importar componentes
const { router } = require("./routers/index");

//Crear app
const app = express();

const PORT = process.env.PORT || 8080;

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);

//ENDPOINTS
app.get("/", (req, res) => {
  res.json({
    success: true,
    response: "Server ON",
  });
});

//Inicializar server
app.listen(PORT, () => {
  mongoose
    .connect(process.env.DB_CONNECT)
    .then(() => console.log("Database connected"))
    .catch((error) => console.log("Database error: " + error));
  console.log(`Server initialized in port: ${PORT}`);
});
