const nomes = ['Juninho', 'Léo', 'Guido', 'Dina', 'Vitinho', 'Nanda', 'Geraldo', 'Breno', 'Maurício'];
const tamanhoDoGrupo = 4;

function grupos(nomes, tamanho) {

    let aux = 1;

    for (let i = 0; nomes.length > i; i += tamanho) {

        console.log(`Grupo ${aux}: ${nomes.slice(i, i + tamanho).join(", ")}`);
        aux++;
    }
}

grupos(nomes, tamanhoDoGrupo);