function distancia(x1,y1,x2,y2){
    let d = Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));
    console.log(`A distância entre os dois pontos é de: ${d.toFixed(3)}`);
}
distancia(1,1,1,4);

