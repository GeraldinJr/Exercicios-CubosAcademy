const body = document.querySelector('body');

const respostas = [];

function novaExpressao() {

    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10) || 1;

    const operadores = [
        { operador: "+", operacao: () => num1 + num2 },
        { operador: "-", operacao: () => num1 - num2 },
        { operador: "*", operacao: () => num1 * num2 },
        { operador: "/", operacao: () => Math.round(num1 / num2) },
    ];

    const indexOperadores = Math.floor(Math.random() * operadores.length);
    const { operador, operacao } = operadores[indexOperadores];

    const expressao = `${num1} ${operador} ${num2}:`;

    respostas.push(operacao().toString());

    return expressao;

}

for (let i = 1; i <= 10; i++) {
    let label = document.createElement("label");
    label.setAttribute("for", `quiz-${i}`);

    let input = document.createElement("input");
    input.setAttribute("id", `quiz-${i}`);
    input.setAttribute("type", "text");

    body.appendChild(label);
    body.appendChild(input);

    label.textContent = novaExpressao();

}

const inputs = document.querySelectorAll('input');

inputs.forEach((input, i) => {
    input.value = "";

    input.addEventListener("keyup", () => {
        if (!input.value) {
            input.classList.remove('certo', 'errado');
        }
        else if (input.value === respostas[i]) {
            input.classList.remove("errado");
            input.classList.add("certo");
        }
        else {
            input.classList.remove("certo");
            input.classList.add("errado");
        }
    })

})