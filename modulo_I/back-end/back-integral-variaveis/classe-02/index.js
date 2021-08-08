function fcelsius(ftemperatura){
    let temperatura = (ftemperatura-32)*5/9;
    console.log(`A temperatura em graus Celsius é: ${temperatura.toFixed(2)}`);
}
fcelsius(73);