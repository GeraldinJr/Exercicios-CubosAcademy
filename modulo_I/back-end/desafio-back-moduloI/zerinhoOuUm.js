function solucao(jogadores) {
    const zeros = jogadores.filter(x => x.jogada === 0);
    const uns = jogadores.filter(x => x.jogada === 1);
    console.log(`${zeros.length === 1 ? zeros[0].nome : `${uns.length === 1 ? uns[0].nome : "NINGUEM"}`}`);

}