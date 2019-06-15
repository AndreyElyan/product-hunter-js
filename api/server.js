const express = require("express");
const cors = require("cors");
// conectar com o database np install mongoose
const mongoose = require("mongoose");
const requireDir = require("require-dir");

//iniciando o app
const app = express();

app.use(express.json());

app.use(cors);

// inciando o database
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useNewUrlParser: true
});

//conecta
requireDir("./src/models");

//rotas
//use "usa qualquer tipo de requisição"
app.use("/api", require("./src/models/routes"));

app.listen(3001); //basicamente, falando para aplicação ouvir a porta 3001

//http://localhost:3001/
