const alunos = require("../dados/alunos");
const cursos = require("../dados/cursos");

function getAlunos(req, res) {
    res.json(alunos);
}

function consultaPorId(req, res) {
    const id = Number(req.params.id);
    validarId(id);
    const aluno = alunos.find(x => x.id === id);

    if (!aluno) {
        res.status(404);
        res.json({ mensagem: "Não foi encontrado nenhum aluno com o id informado" });
        return;
    }

    res.json(aluno);

}

function addAluno(req, res) {

    const mensagem = validarAluno(req.body);

    if (mensagem) {
        res.status(400);
        res.json({ mensagem });
        return;
    }

    formatarAluno(req.body);

    const id = !alunos.length ? 1 : alunos[alunos.length - 1].id + 1;
    const nome = req.body.nome;
    const sobrenome = req.body.sobrenome;
    const idade = req.body.idade;
    const curso = req.body.curso;

    alunos.push({
        id,
        nome,
        sobrenome,
        idade,
        curso
    });
    res.status(201);
    res.send();
    return;

}

function removerAluno(req, res) {
    const id = Number(req.params.id);
    validarId(id);

    const index = alunos.findIndex(x => x.id === id);

    if (index === -1) {
        res.status(404);
        res.json({ mensagem: "Nenhum aluno com o id informado foi encontrado" });
        return;
    }

    res.status(200);
    res.json(alunos[index]);
    alunos.splice(index, 1);

}


function atualizarAluno(req, res) {
    const id = Number(req.params.id);
    validarId(id);

    const aluno = alunos.find(x => x.id === id);

    if (!aluno) {
        res.status(404);
        res.json({ mensagem: "Nenhum aluno com o id informado foi encontrado" });
        return;
    }

    const mensagem = validarAluno({
        nome: req.body.nome ?? aluno.nome,
        sobrenome: req.body.sobrenome ?? aluno.sobrenome,
        idade: req.body.idade ?? aluno.idade,
        curso: req.body.curso ?? aluno.curso,
    });

    if (mensagem) {
        res.status(400);
        res.json({ mensagem });
        return;
    }

    aluno.nome = req.body.nome ?? aluno.nome;
    aluno.sobrenome = req.body.sobrenome ?? aluno.sobrenome;
    aluno.idade = req.body.idade ?? aluno.idade;
    aluno.curso = req.body.curso ?? aluno.curso;

    formatarAluno(aluno);

    res.json(aluno);

}


function substituirAluno(req, res) {
    const id = Number(req.params.id);
    const mensagem = validarAluno(req.body);

    if (mensagem) {
        res.status(400);
        res.json({ mensagem });
        return;
    }
    validarId(id);

    const index = alunos.findIndex(x => x.id === id);
    formatarAluno(req.body);

    if (index === -1) {
        const id = !alunos.length ? 1 : alunos[alunos.length - 1].id + 1;
        const nome = req.body.nome;
        const sobrenome = req.body.sobrenome;
        const idade = req.body.idade;
        const curso = req.body.curso;

        const aluno = {
            id,
            nome,
            sobrenome,
            idade,
            curso
        }

        alunos.push(aluno);
        res.status(201);
        res.json(aluno);
        return;
    }

    const { nome, sobrenome, idade, curso } = req.body;

    alunos[index] = {
        id: alunos[index].id,
        nome,
        sobrenome,
        idade,
        curso
    }

    res.json(alunos[index]);

}


function validarId(id) {
    if (isNaN(id)) {
        res.status(400);
        res.json({ mensagem: "O id informado deve ser um número" });
        return;
    }
    return;
}


function formatarAluno(aluno) {
    if (aluno.nome) {
        aluno.nome = aluno.nome.trim()[0].toUpperCase() + aluno.nome.trim().substr(1).toLowerCase();
    }

    if (aluno.sobrenome) {
        aluno.sobrenome.trim()[0].toUpperCase() + aluno.sobrenome.trim().substr(1).toLowerCase();
    }

    if (aluno.curso) {
        aluno.curso = cursos.find(x => x.toLowerCase() === aluno.curso.toLowerCase());
    }
}

function validarAluno(aluno) {
    if (!aluno.nome) {
        return "O campo nome é obrigatório"
    }

    if (!aluno.sobrenome) {
        return "O campo sobrenome é obrigatório"
    }

    if (!aluno.idade) {
        return "O campo idade é obrigatório"
    }

    if (!aluno.curso) {
        return "O campo curso é obrigatório"
    }

    if (!aluno.nome.trim()) {
        return "O campo nome é obrigatório"
    }

    if (!aluno.sobrenome.trim()) {
        return "O campo sobrenome é obrigatório"
    }

    if (!aluno.curso.trim()) {
        return "O campo curso é obrigatório"
    }

    if (!typeof (aluno.nome) === "string") {
        return "O nome deve ser uma string"
    }

    if (!typeof (aluno.sobrenome) === "string") {
        return "O sobrenome deve ser uma string"
    }

    if (!typeof (aluno.idade) === "number") {
        return "A idade deve ser um número"
    }

    if (!typeof (aluno.curso) === "string") {
        return "O curso deve ser uma string"
    }

    if (aluno.idade < 18) {
        return "O aluno deve ser maior de idade"
    }

    if (!cursos.find(x => x.toLowerCase() === aluno.curso.toLowerCase())) {
        return "Curso Inválido"
    }
}

module.exports = { getAlunos, consultaPorId, addAluno, removerAluno, atualizarAluno, substituirAluno }