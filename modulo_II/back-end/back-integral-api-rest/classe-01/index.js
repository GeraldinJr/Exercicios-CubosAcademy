const { query } = require("express");
const express = require("express");

const app = express();

app.use(express.json());

const convidados = ["Carlos", "Amanda", "Fernanda", "Juliana", "Lucas", "Roberto"];

app.get("/convidados", (req, res) => {

    if (!req.query.nome) {

        res.json(convidados);
    }

    else {
        let nome = req.query.nome;
        nome = nome[0].toUpperCase() + nome.substr(1).toLowerCase();
        convidados.includes(nome) ? res.json({ mensagem: "Convidado presente." }) : res.json({ mensagem: "O convidado buscado não está presente na lista." })
    }
})

app.post("/convidados", (req, res) => {
    let nome = req.body.nome;
    nome = nome[0].toUpperCase() + nome.substr(1).toLowerCase();
    if (convidados.includes(nome)) {
        res.json({ mensagem: "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também." });
    }
    else {
        convidados.push(nome);
        res.json({ mensagem: "Convidado adicionado" });

    }
})

app.delete("/convidados/:nome", (req, res) => {
    let nome = req.params.nome;
    nome = nome[0].toUpperCase() + nome.substr(1).toLowerCase();

    if (convidados.includes(nome)) {
        const i = convidados.indexOf(nome);
        convidados.splice(i, 1);
        res.json({ mensagem: "Convidado removido" });

    }
    else {
        res.json({ mensagem: "O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido." });
    }
})

app.listen(8000);