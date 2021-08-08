function jokenpo(jog1, jog2) {
    if (jog1 === jog2) {
        console.log("empate");
    }
    else if (jog1 === "pedra" && jog2 === "tesoura" || jog1 === "tesoura" && jog2 === "papel" || jog1 === "papel" && jog2 === "pedra") {
        console.log(jog1);
    }
    else {
        console.log(jog2);
    }
}