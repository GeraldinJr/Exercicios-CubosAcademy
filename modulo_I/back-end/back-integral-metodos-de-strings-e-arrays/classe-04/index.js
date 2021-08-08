let identificador = "123";
let nome = "josé silva costa";
let email = "      jose@email.com  ";
let tags = ['financeiro', 'administrativo', 'geral'];

identificador = identificador.padStart(6, "0");
nome = nome.split(" ");
let nomeCerto = [];
for (let i = 0; i < nome.length; i++) {
    nomeCerto[i] = nome[i][0].toUpperCase() + nome[i].substr(1);
}
nomeCerto = nomeCerto.join(" ");
email = email.trim();
tags = tags.join();
console.log(tags);
