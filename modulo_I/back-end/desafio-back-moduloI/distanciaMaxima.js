function processData(input) {
    const linhas = input.trim().split("\n");
    const n = linhas.shift();
    const coordenadas = linhas.map(x => {
        return {
            x: parseFloat(x.split(" ")[0]),
            y: parseFloat(x.split(" ")[1])
        }
    });
    let maiorDistancia = 0;
    for (itemf of coordenadas) {
        for (itemd of coordenadas) {
            const dist = (Math.sqrt(Math.pow(itemf.x - itemd.x, 2) + Math.pow(itemf.y - itemd.y, 2)));
            maiorDistancia = dist > maiorDistancia ? dist : maiorDistancia;
        }
    }
    console.log(maiorDistancia);
}
