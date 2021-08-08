const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

console.log(frutas.reverse().join(", "));

frutas.reverse().splice(frutas.length - 1, 1, "Melão");

frutas.splice(0, 1);

console.log(frutas);
