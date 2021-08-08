function covid(po,x,t){
    let p=po*Math.pow(x,t/7);
    console.log(`Após ${t} dias, ${p.toFixed(2)} pessoas estarão infectadas`);
}
covid(1000,4,100);