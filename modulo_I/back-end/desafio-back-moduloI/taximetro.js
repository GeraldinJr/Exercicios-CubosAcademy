function solucao(min, km) {
    let precoTempo = (min <= 20 ? 50 * min : 50 * 20 + (min - 20) * 30);
    let precoDist = (km <= 10 ? 70 * km : 70 * 10 + (km - 10) * 50);
    console.log(Math.floor(precoDist + precoTempo));

}