const express = require("express");

const app = express();

let i = 0;

app.get("/", (req, res) => {
    console.log("Recebi um GET /");

    res.send(`É a vez de ${jogadores[i]} jogar!`)

    i < jogadores.length - 1 ? i++ : i = 0;
})

app.listen(8000);

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];