function logarRequisicao(req, res, next) {
    console.log(req.method, req.url);
    console.log("O corpo da mensagem é: ", req.body);
    next();
}

function travaDeSenha(req, res, next) {
    if (req.method === "GET" || req.query.senha === "cubos123") {
        next();
    }
    else {
        res.status(401);
        res.json({ erro: "Senha incorreta" });
    }
}

module.exports = { logarRequisicao, travaDeSenha };