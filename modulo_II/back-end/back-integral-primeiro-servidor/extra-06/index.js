const express = require("express");

const app = express();

function pad(num) {
    let s = num + "";
    return s.length < 2 ? "0" + s : s;
}

const relogio = {
    min: 0,
    sec: 0,
    cronometro: function () {

        if (relogio.sec === 59) {
            relogio.sec = 0;
            relogio.min++;
        }

        else {
            relogio.sec++;
        }

        console.log(relogio.sec);
    },
    zerar: function () {
        relogio.min = 0;
        relogio.sec = 0;
    }

}

const tempo = relogio.cronometro;

let intervalId = undefined;

app.get("/", (req, res) => {

    res.send(`Tempo atual do cronômetro: ${pad(relogio.min)} minutos e ${pad(relogio.sec)} segundos`);

})

app.get("/iniciar", (req, res) => {

    if (!intervalId) {
        relogio.zerar();
        intervalId = setInterval(tempo, 1000);
        res.send('Cronômetro iniciado!');
    }
    else {
        res.send('Cronômetro já está inciado!');
    }
})

app.get("/pausar", (req, res) => {
    clearInterval(intervalId);
    intervalId = undefined;
    res.send('Cronômetro pausado!');

})

app.get("/continuar", (req, res) => {

    if (!intervalId) {
        intervalId = setInterval(tempo, 1000);
        res.send('Cronômetro continuando!');
    }
    else {
        res.send('Cronômetro já está em andamento!');
    }
})

app.get("/zerar", (req, res) => {

    relogio.zerar();
    res.send(`Cronômetro zerado!`);
})

app.listen(8000);