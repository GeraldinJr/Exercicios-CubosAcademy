const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    calcularTotalDeItens: function () {
        let itens = 0;
        for (item of this.produtos) {
            itens += item.qtd;
        }
        return itens;
    },
    calcularTotalAPagar: function () {
        let total = 0;
        for (item of this.produtos) {
            total += item.qtd * item.precoUnit / 100;
        }
        return total.toFixed(2);
    },
    imprimirResumo: function () {
        console.log(`Cliente: ${this.nomeDoCliente}\nTotal de itens: ${this.calcularTotalDeItens()}\nTotal a pagar: R$ ${this.calcularTotalAPagar()}`)
    },
    addProduto: function (produto) {
        let aux = true;
        for (item of this.produtos) {
            if (produto.id === item.id) {
                item.qtd += produto.qtd;
                aux = false;
            }
        }
        if (aux) {
            this.produtos.push(produto)
        }
    },
    imprimirDetalhes: function () {
        console.log(`\nCliente: ${this.nomeDoCliente}\n`);
        for (i = 0; i < this.produtos.length; i++) {

            console.log(`Item ${i} - ${this.produtos[i].nome} - ${this.produtos[i].qtd} und - R$ ${(this.produtos[i].qtd * this.produtos[i].precoUnit / 100).toFixed(2)}`)
        }
        console.log(`\nTotal de itens: ${this.calcularTotalDeItens()} itens\nTotal a pagar: R$ ${this.calcularTotalAPagar()}`);
    },
    calcularDesconto: function () {
        if (this.calcularTotalDeItens() > 4) {
            mBarato = this.produtos[0].precoUnit;
            for (item of this.produtos) {
                if (mBarato > this.produtos.precoUnit) {
                    mBarato = this.produtos.precoUnit;
                }
            }
            let retorno = mBarato / 100 >= this.calcularTotalAPagar() / 10 ? mBarato / 100 : this.calcularTotalAPagar() / 10;
            return retorno;
        }
        else {
            return this.calcularTotalAPagar() / 10;
        }
    }
}

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}
carrinho.imprimirDetalhes();
console.log(carrinho.calcularDesconto());
carrinho.addProduto(novoTenis);
carrinho.addProduto(novaBermuda);
carrinho.imprimirDetalhes();
console.log(carrinho.calcularDesconto());
