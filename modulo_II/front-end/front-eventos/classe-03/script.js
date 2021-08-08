const inscreverSe = document.querySelector('.btn');
const modal = document.querySelector('.modal');
const modalBotoes = document.querySelectorAll(".modal button");
const confirmar = document.querySelector('.confirmar');

function inscricao(event) {
    const btnClicado = event.target;

    btnClicado.textContent = 'INSCRITO';
    btnClicado.classList.add('inscrito');

    btnClicado.removeEventListener('click', inscricao);

    btnClicado.addEventListener('click', function () {
        modal.classList.remove('escondido');
    })
}

inscreverSe.addEventListener('click', inscricao);

modalBotoes.forEach(btn => {
    btn.addEventListener('click', function () {
        modal.classList.add('escondido');
    })
})

confirmar.addEventListener('click', function () {
    modal.classList.add('escondido');
    inscreverSe.textContent = 'INSCREVA-SE';
    inscreverSe.classList.remove('inscrito');

})

