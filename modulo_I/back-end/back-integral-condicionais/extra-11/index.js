//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 3000000000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 51;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1700000;

let parcela = 0;

if (rendaMensalEmCentavos > 200000 && totalJaPagoPeloAluno < 1800000 && mesesDecorridos <= 60) {
    let parcela = rendaMensalEmCentavos * 0.18 + totalJaPagoPeloAluno > 1800000 ? 1800000 - totalJaPagoPeloAluno : rendaMensalEmCentavos * 0.18;
    console.log(`O valor da parcela desse mês é R$ ${(parcela / 100).toFixed(2)}`);
}
else if (totalJaPagoPeloAluno >= 1800000) {
    console.log("O valor da parcela desse mês é R$ 0. Nenhum valor é devido pois o estudante já pagou o valor total do curso (de R$ 18000,00).");
}
else if (mesesDecorridos > 60) {
    console.log("O valor da parcela desse mês é R$ 0. Nenhum valor é devido pois já se passou o periodo de 60 meses.");
}
else {
    console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.");
}
