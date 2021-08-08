const alturaEmCm = 195;

function posicao(altura){
    if (altura<180) console.log("Reprovado")
    else if (altura >=180 && altura<=185) console.log("LÍBERO");
    else if (altura >=186 && altura<=195) console.log("PONTEIRO");
    else if (altura >=196 && altura<=205) console.log("OPOSTO");
    else console.log("CENTRAL");
}

posicao(alturaEmCm)