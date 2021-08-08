function processData(input) {
    const senhas = input.trim().split("\n");
    let validacao = true;
    let pos = 0;
    for (letra of senhas[0]) {
        if (senhas[1].includes(letra) && pos !== -1) {
            pos = senhas[1].indexOf(letra, pos);
        }
        else {
            validacao = false;
            break;
        }
    }
    console.log(`${validacao ? "SIM" : "NAO"}`);
}