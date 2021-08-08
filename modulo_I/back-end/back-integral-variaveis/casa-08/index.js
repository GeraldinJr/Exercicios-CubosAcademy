function CAcirculo(r){
    let c = 2*r*Math.PI, a = Math.PI*Math.pow(r,2);
    console.log(`O comprimento é ${c.toFixed(3)} e a área é ${a.toFixed(3)}`);
}

CAcirculo(2);