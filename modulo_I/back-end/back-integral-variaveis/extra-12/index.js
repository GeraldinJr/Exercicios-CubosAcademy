function txjuros(m, c, n) {
    let i = Math.pow(m / c, 1 / n) - 1;
    console.log(`O seu financiamento de ${c} reais teve uma taxa de juros de ${(i * 100).toFixed(2)}%
    pois após ${n} meses você teve que pagar ${m} reais`);
}

txjuros(20000,10000,36);