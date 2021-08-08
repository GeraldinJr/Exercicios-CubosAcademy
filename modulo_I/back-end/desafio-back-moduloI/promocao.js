function solucao(precos) {
    console.log(`${precos.length < 3 ? precos.reduce((acc, x) => acc + x) : precos.reduce((acc, x) => acc + x) - Math.min.apply(Math, precos) / 2}`);

}