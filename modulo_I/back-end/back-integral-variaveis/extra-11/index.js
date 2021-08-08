function Vesfera(diametro){
    let volume =4/3*Math.pow(diametro/2,3);
    console.log(`O volume de uma esfera de raio ${diametro/2} é de ${volume.toFixed(4)} PI = ${volume*Math.PI.toFixed(4)}`);
}
Vesfera(6);