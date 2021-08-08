const caractere = "A";
const vogais = ['A', 'E', 'I', 'O', 'U'];
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
if (typeof caractere == 'string') {
    console.log(`${vogais.indexOf(caractere.toUpperCase()) != -1 ? "Vogal" : "Consoante"} ${caractere == caractere.toUpperCase() ? "maiúscula" : "minúscula"}`);
}
else  console.log(`Número`);