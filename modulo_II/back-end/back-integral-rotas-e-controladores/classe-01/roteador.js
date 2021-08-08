const express = require('express');
const roteador = express();

const { consulta, consultaPorId } = require("./controladores/imoveis");

roteador.get("/imoveis", consulta);

roteador.get("/imoveis/:id", consultaPorId);

module.exports = roteador;
