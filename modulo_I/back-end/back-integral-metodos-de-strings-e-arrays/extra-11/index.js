const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

function gpCar(carros, posicao) {
    console.log(carros.slice(posicao, posicao + 3).join(" - "));
}

gpCar(nomes, posicao);