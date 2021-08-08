const cpf = "011.022.033-44";

function clean(cpf) {

    console.log(cpf.replace('-', '').replace('/', '').split('.').join(''));
}

clean(cpf);