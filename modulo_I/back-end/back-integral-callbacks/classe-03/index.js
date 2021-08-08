const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

const modificado = frutas.map((x, i) => {
    return `${i} - ${x.toLocaleUpperCase().substr(0, 1) + (x.toLocaleLowerCase()).substr(1)}`;
})

console.log(modificado);