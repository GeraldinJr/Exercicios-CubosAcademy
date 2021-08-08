const carro = {
    ligado: false,
    velocidade: 0,
    ligar: function () {
        if (this.ligado) {
            console.log("Este carro já está ligado")
        }
        else {
            this.ligado = true;
            this.status();
        }
    },
    desligar: function () {

        if (!this.ligado) {
            console.log("Este carro já está desligado")
        }
        else {
            this.ligado = false;
            this.velocidade = 0;
            this.status();
        }
    },
    acelerar: function () {
        if (!this.ligado) {
            console.log("Não é possível acelerar um carro desligado")
        }
        else {
            this.velocidade += 10;
            this.status()
        }

    },
    desacelerar: function () {
        if (!this.ligado) {
            console.log("Não é possível desacelerar um carro desligado")
        }
        else {
            this.velocidade -= 10;
            this.status()
        }

    },
    status: function () {
        console.log(`Carro ${this.ligado ? "ligado" : "desligado"}. Velocidade: ${this.velocidade}`)
    }

}
carro.desligar()
carro.ligar()
carro.ligar()
carro.acelerar()
carro.acelerar()
carro.desacelerar()
carro.desligar()
carro.acelerar()
carro.desacelerar()