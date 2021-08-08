const nomes = ["Ana", "Joana", "Carlos", "amanda", "antonio"];
let a_nomes = [];
for (nome of nomes) {
    if (nome[0] === "A" || nome[0] === "a") {
        a_nomes.push(nome);
    }
}
console.log(a_nomes);