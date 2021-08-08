const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function (valor) {
        this.saldo += valor;
        const transacao = {
            tipo: "Deposito",
            valor: valor,
        }
        this.historicos.unshift(transacao);
        return `Deposito de R$ ${(valor / 100).toFixed(2)} realizado para o(a) cliente: ${this.nome}.`;
    },
    sacar: function (valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            const transacao = {
                tipo: "Saque",
                valor: valor,
            }
            this.historicos.unshift(transacao);
            return `Saque de R$ ${(valor / 100).toFixed(2)} realizado para o(a) cliente: ${this.nome}.`;
        }
        else {
            return `Saldo insuficiente para o saque de: ${this.nome}`;
        }
    },
    extrato: function () {
        let a = `Extrato de ${this.nome} - Saldo: R$ ${(this.saldo / 100).toFixed(2)}\nHistórico:\n`;
        for (transacao of this.historicos) {
            a += `${transacao.tipo} de $${(transacao.valor / 100).toFixed(2)}\n`;
        }
        return a;
    }
}

console.log(contaBancaria.depositar(10000));
console.log(contaBancaria.sacar(50000));
console.log(contaBancaria.sacar(5000));
console.log(contaBancaria.extrato());
