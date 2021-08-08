function solucao(carta) {
    const cartas = ['Q', 'J', 'K', 'A', '2', '3'];
    console.log(`${cartas.indexOf(carta) < cartas.length - 1 ? cartas[cartas.indexOf(carta) + 1] : cartas[0]}`);
}