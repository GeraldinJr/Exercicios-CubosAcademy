const numeros = [54, 22, 14, 87, 284];
let aux = -1;
for (i = 0; i < numeros.length; i++) {
    if (numeros[i] === 10) {
        aux = i;
    }
}
console.log(aux);
