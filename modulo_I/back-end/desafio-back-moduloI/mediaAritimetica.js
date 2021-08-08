function solucao(lista) {
    const numeros = lista.map(Number);
    console.log(numeros.reduce((acc, x) => acc + x) / numeros.length);
}