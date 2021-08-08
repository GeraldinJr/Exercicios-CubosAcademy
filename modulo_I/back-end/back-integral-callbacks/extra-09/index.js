const pessoas = [
    {
        nome: 'Antonio',
        idade: 30,
        profissao: 'Jornalista'
    },
    {
        nome: 'Maria',
        idade: 30,
        profissao: 'Jornalista'
    },
    {
        nome: 'Ana',
        idade: 21,
        profissao: 'Programador'
    },
    {
        nome: 'Beatriz',
        idade: 20,
        profissao: 'Programador'
    },
    {
        nome: 'José',
        idade: 32,
        profissao: 'Jornalista'
    },
    {
        nome: 'Marcos',
        idade: 30,
        profissao: 'Programador'
    }
];

const selecionados20Programadores = pessoas.filter(x => x.idade > 20 && x.profissao === 'Programador');

const selecionados30Jornalistas = pessoas.filter(x => x.idade > 30 && x.profissao === 'Jornalista');

const selecionados29JornalistasProgramadores = pessoas.filter(x => x.idade < 30 && (x.profissao === 'Jornalista' || x.profissao === 'Programador'));

console.log(selecionados20Programadores);
console.log(selecionados30Jornalistas);
console.log(selecionados29JornalistasProgramadores);
