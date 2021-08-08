const aposentada = false;
const portadoraDeDoenca = true;
const totalDeRendimentos = 2000000; //emCentavos

if (aposentada||portadoraDeDoenca){
    console.log("ISENTA")
}
else {
    if(totalDeRendimentos>2855970){
        console.log("PEGA LEAO")
    }
    else
        console.log("VAZA LEAO! JA TA DIFICIL SEM VC")
}