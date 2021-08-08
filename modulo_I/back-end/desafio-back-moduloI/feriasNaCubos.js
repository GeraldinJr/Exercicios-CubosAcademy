function processData(input) {
    let strGrupos = input.trim().split(" ");
    let grupos = strGrupos.map(x => Number(x))
    let soma = grupos[3] + Math.floor(grupos[1] / 2);
    grupos[1] %= 2;

    if (grupos[2] >= grupos[0]) {
        soma += grupos[2] + grupos[1];
    }
    else {
        grupos[0] -= grupos[2];
        soma += grupos[2] + Math.floor(grupos[0] / 4);
        grupos[0] %= 4;
        // soma += (grupos[0] + 2 * grupos[1]) > 4 ? 2 : 1;
        if (grupos[0] + 2 * grupos[1] > 0) {
            soma += (grupos[0] + 2 * grupos[1]) > 4 ? 2 : 1;
        }
    }
    console.log(soma);
}