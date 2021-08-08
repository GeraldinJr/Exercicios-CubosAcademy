const original = [1, 4, 12, 21, 53, 88, 112];
let pares = [];
for (num of original) {
    if (num % 2 === 0) {
        pares.push(num);
    }
}
console.log(pares);