function imc (altura,peso){
    let imc = peso/Math.pow(altura,2);
    console.log(`O IMC calculado é: ${imc.toFixed(2)}`);
}

imc(1.94,97);