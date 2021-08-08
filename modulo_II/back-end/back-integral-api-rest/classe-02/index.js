const express = require("express");

const app = express();

app.use(express.json());

const livros = [
    {
        id: 1,
        titulo: "A Odisséia de Jonas",
        autor: "Thomas Crawling",
        ano: 2001,
        numPaginas: 197
    },
    {
        id: 2,
        titulo: "Jonas e a sociedade escondida",
        autor: "Claire Crawling",
        ano: 2004,
        numPaginas: 158
    }
];

let novoID = livros.length + 1;

app.get("/livros", (req, res) => {
    res.json(livros);
})

app.get("/livros/:id", (req, res) => {
    const id = Number(req.params.id);

    if (!isNaN(id)) {

        const livro = livros.find(x => x.id === id);

        livro ? res.json(livro) : res.json({ mensagem: "Não existe livro para o ID informado." });

    }

    else {
        res.json({ mensagem: "O valor do parâmetro ID da URL não é um número válido." });
    }

})

app.post("/livros", (req, res) => {
    const livro = req.body;

    livros.push({
        id: novoID,
        titulo: livro.titulo,
        autor: livro.autor,
        ano: livro.ano,
        numPaginas: livro.numPaginas
    })

    novoID++;

    res.json({ "mensagem": "Livro adicionado." });
})

app.put("/livros/:id", (req, res) => {
    const id = Number(req.params.id);
    const i = livros.findIndex(x => x.id === id);
    const livro = req.body;

    if (i !== -1) {

        livros[i].titulo = livro.titulo;
        livros[i].autor = livro.autor;
        livros[i].ano = livro.ano;
        livros[i].numPaginas = livro.numPaginas;

        res.json({ "mensagem": "Livro substituído." });

    }

    else {
        res.json({ "mensagem": "Não existe livro a ser substituído para o ID informado." });
    }
})

app.patch("/livros/:id", (req, res) => {
    const id = Number(req.params.id);
    const i = livros.findIndex(x => x.id === id);
    const livro = req.body;

    if (i !== -1) {

        livros[i].titulo = livro.titulo ? livro.titulo : livros[i].titulo;
        livros[i].autor = livro.autor ? livro.autor : livros[i].autor;
        livros[i].ano = livro.ano ? livro.ano : livros[i].ano;
        livros[i].numPaginas = livro.numPaginas ? livro.numPaginas : livros[i].numPaginas;

        res.json({ "mensagem": "Livro alterado." });

    }

    else {
        res.json({ "mensagem": "Não existe livro a ser alterado para o ID informado." });
    }
})

app.delete("/livros/:id", (req, res) => {
    const id = Number(req.params.id);
    const i = livros.findIndex(x => x.id === id);

    if (i != -1) {

        livros.splice(i, 1);

        res.json({ "mensagem": "Livro removido." });

    }

    else {
        res.json({ "mensagem": "Não existe livro a ser removido para o ID informado." });
    }
})

app.listen(8000);