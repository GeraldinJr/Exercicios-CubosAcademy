function solucao(lista) {
    console.log(`${lista.some(x => x >= 18) ? Math.min.apply(Math, lista.filter(x => x >= 18)) : "CRESCA E APARECA"}`);

}