const nome = 'Guido Cerqueira'

function nick(nome) {
    console.log(`@${nome.toLowerCase().trim().substr(0, 13).split(' ').join('')}`);
}

nick(nome);
