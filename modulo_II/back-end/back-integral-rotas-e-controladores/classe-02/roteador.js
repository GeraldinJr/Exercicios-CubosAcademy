const express = require("express");
const { getAlunos, consultaPorId, addAluno, removerAluno, atualizarAluno, substituirAluno } = require("./controladores/alunos");
const alunos = require("./dados/alunos");

const roteador = express();

roteador.get("/alunos", getAlunos);
roteador.get("/alunos/:id", consultaPorId);
roteador.post("/alunos", addAluno);
roteador.delete("/alunos/:id", removerAluno);
roteador.patch("/alunos/:id", atualizarAluno);
roteador.put("/alunos/:id", substituirAluno)

module.exports = roteador;