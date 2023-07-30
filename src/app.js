require("dotenv").config();
const express = require("express");
//require("./db.js");
const morgan = require("morgan");
const cors = require("cors");
const mainroutes = require("./Routes/main.routes");

//basic config
//const basicconfig = require("./libs/basicConfig");

//set app
const app = express();

//settings
//basicconfig.createRol();
app.set("port", process.env.PORT || 3000);
app.use(express.json());

//middlewares
app.use(cors());
app.use(morgan("dev"));

//usar rutas
app.use("/api/etiqueta/", mainroutes.etiquetaRoutes);
app.use("/api/psw/", mainroutes.pswRoutes);

//init
app.listen(app.get("port"), () => {
  console.log(`API running at http://localhost:${app.get("port")}`);
});
