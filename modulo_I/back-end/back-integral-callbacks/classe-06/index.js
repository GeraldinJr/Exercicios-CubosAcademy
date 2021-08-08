const jogadores = ['Guido', 'Dina', 'Léo', 'Nanda', 'Juninho'];

let i = 0;

function jogadorDaRodada() {

    if (i < jogadores.length) {
        console.log(jogadores[i])
        i++
    }
    else {
        console.log("A rodada terminou!");
        clearInterval(intervalId);
    }
}

const intervalId = setInterval(jogadorDaRodada, 10 * 1000 / jogadores.length);