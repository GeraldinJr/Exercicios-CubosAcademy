const express = require("express");

const app = express();

let i = 0;

app.get("/", (req, res) => {
    console.log("Recebi um GET /");

    res.send(`É a vez de ${jogadores[i]} jogar!`)

    i < jogadores.length - 1 ? i++ : i = 0;
})

app.get("/remover", (req, res) => {

    const indice = Number(req.query.indice);

    if (indice >= 0 && indice < jogadores.length) {
        jogadores.splice(indice, 1);
        res.send(`Jogador na posição ${indice} removido!`);
    }

    else {
        res.send(`Não existe jogador no índice informado (${indice}) para ser removido.`);
    }

})

app.get("/adicionar", (req, res) => {

    const indice = typeof (req.query.indice) == "undefined" ? jogadores.length : Number(req.query.indice);

    if (indice <= jogadores.length) {
        jogadores.splice(indice, 0, req.query.nome);
        res.send(`Novo jogador adicionado na posição ${indice}`);
    }
    else {
        res.send(`O índice informado (${indice}) não existe no array. Novo jogador não adicionado.`)
    }



})


app.listen(8000);



const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];