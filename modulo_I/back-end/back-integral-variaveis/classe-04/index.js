function cjuros(capital,taxa,periodo){
    let montante = capital*Math.pow((1+taxa),periodo);
    console.log(`O montante ao final do período será de: R$${montante.toFixed(2)}`);
}
cjuros(1000,0.125,5);