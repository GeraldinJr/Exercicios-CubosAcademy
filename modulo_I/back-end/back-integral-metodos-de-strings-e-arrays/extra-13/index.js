const nomeArquivo = 'Foto da Familia.png';

function validar(foto) {
    const validos = ['jpg', 'jpeg', 'gif', 'png'];
    const extensao = foto.substr(foto.lastIndexOf('.') + 1);

    console.log(`${validos.includes(extensao) ? "Arquivo válido" : "Arquivo inválido"}`);
}

validar(nomeArquivo);