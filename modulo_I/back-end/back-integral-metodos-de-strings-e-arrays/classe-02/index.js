const cpf = "12345678900";
const cnpj = "12345678000199";

function validarCPF(cpf) {
    console.log(`${cpf.length === 11 ? `${cpf.substr(0, 3)}.${cpf.substr(3, 3)}.${cpf.substr(6, 3)}-${cpf.substr(9, 2)}` : "CPF inválido"}`);
}

function validarCNPJ(cnpj) {
    console.log(`${cnpj.length === 14 ? `${cnpj.substr(0, 2)}.${cnpj.substr(2, 3)}.${cnpj.substr(5, 3)}/${cnpj.substr(8, 4)}-${cnpj.substr(12, 2)}` : "CNPJ inválido"} `);
}

validarCPF(cpf);
validarCNPJ(cnpj);