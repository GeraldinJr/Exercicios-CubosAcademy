const notas = [6, 8, 9, 8, 9, 10, 10, 11, 11, 15];

let newNotas = [];

notas.forEach(x => {
    if (!newNotas.includes(x)) {
        newNotas.push(x);
    }
})

console.log(newNotas);