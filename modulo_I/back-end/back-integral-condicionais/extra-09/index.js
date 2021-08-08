const nota = 5.9;
let conceito = "E"
if (nota < 4) {
    conceito = "E";
}
else if (nota < 6) {
    conceito = "D";
}
else if (nota < 8) {
    conceito = "C";
}
else if (nota < 9) {
    conceito = "B";
}
else {
    conceito = "A";
}
console.log(`O estudante obteve conceito ${conceito}`);
