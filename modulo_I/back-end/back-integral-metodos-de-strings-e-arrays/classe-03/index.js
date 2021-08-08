const texto = "Aprenda programar do zero na Cubos Academy";

let resultado = texto;

while (resultado.includes(" ")) {
    resultado = resultado.replace(" ", "-");
}

console.log(resultado);

