const celular = 71999918888;

let cel = `${celular}`;

function numCel(celular) {
    console.log(`${celular.length === 9 ? `${celular.substr(0, 1)} ${celular.substr(1, 4)}-${celular.substr(5, 4)}` : `(${celular.substr(0, 2)}) ${celular.substr(2, 1)} ${celular.substr(3, 4)}-${celular.substr(7, 4)}`}`);
}

numCel(cel);