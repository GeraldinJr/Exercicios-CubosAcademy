function findRua(cep) {
    const endereços = [
        { cep: 00111222, rua: "Rua dos Artistas" },
        { cep: 00111333, rua: "Rua Augusta" },
        { cep: 00222444, rua: "Avenida Paralela" },
        { cep: 11222333, rua: "Rua Carlos Gomes" },
    ];

    const encontrado = endereços.find(x => x.cep === cep);
    console.log(encontrado.rua);
}

findRua(00222444);