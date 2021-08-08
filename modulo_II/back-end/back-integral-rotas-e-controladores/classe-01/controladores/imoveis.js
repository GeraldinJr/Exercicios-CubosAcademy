const imoveis = require("../dados/imoveis");


function consulta(req, res) {
    res.json(imoveis);
}

function consultaPorId(req, res) {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        res.status(400);
        res.json({ erro: "O id informado deve ser um número" });
        return;
    }

    const imovel = imoveis.find(x => x.id === id);

    if (!imovel) {
        res.status(404);
        res.json({ erro: "Não foi encontrado nenhum imóvel com o id informado" });
        return;
    }

    res.json(imovel);

}

module.exports = { consulta, consultaPorId };