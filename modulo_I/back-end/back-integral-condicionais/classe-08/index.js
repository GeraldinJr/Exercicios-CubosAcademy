const idade = 21;
const possuiPatologia = false;
const altura = 195;
const ehEstudante =true;

if (idade < 12 || idade > 65 || possuiPatologia || altura < 150) {
    console.log("ACESSO NEGADO")
}
else {
    const preco = ehEstudante ? "10 reais" : "20 reais";
    console.log(preco)
}