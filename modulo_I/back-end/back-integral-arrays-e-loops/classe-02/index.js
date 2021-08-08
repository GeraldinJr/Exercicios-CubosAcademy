const letras = ["A", "a", "B", "C", "E", "e"];
let aux = 0;
for (letra of letras) {
    if (letra === "E" || letra === "e") {
        aux++;
    }
}
if (aux === 0) {
    console.log(`Nenhuma letra "E" ou "e" foi encontrada.`);
}
else {
    console.log(`Foram encontradas ${aux} letra(s) "E" ou "e"`);
}