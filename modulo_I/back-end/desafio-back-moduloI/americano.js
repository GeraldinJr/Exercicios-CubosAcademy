function solucao(numeros) {
    console.log(`${numeros.reduce((acc, x) => acc + x) % numeros.length === 0 ? numeros.length : numeros.reduce((acc, x) => acc + x) % numeros.length}`)
}