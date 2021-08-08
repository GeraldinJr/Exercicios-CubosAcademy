function desconto(preco,dinheiro){
    let desconto =(1-dinheiro/preco)*100;
    console.log(`O desconto necessário é de: ${desconto.toFixed(2)}%`);
}
desconto(109,37);