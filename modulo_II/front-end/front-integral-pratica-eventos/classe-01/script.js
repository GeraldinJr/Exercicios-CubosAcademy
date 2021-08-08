const menu = document.querySelector(".menu");
const txtMenu = document.querySelectorAll("nav div p");
const fecharMenu = document.querySelector(".fechar");
const imagens = document.querySelectorAll(".foto img");
const modal = document.querySelector(".modal");
const imgModal = document.querySelector(".imgModal");
const fecharModal = document.querySelector(".btnFecharModal");
const proximo = document.querySelector(".proximo");
const anterior = document.querySelector(".anterior");


function avancar() {
    const index = Array.from(imagens).findIndex(x => x.src === imgModal.src);
    imgModal.src = imagens[index + 1].src;
    verificarModal();
}

function voltar() {
    const index = Array.from(imagens).findIndex(x => x.src === imgModal.src);
    imgModal.src = imagens[index - 1].src;
    verificarModal();
}

function verificarModal() {
    const i = [...imagens].findIndex(x => x.src === imgModal.src);
    if (picture[i].classList.contains('liked')) {
        pictureModal.classList.add('liked');
    } else {
        pictureModal.classList.remove('liked');
    }
    if (i === 0) {
        anterior.style.display = 'none';
        proximo.style.display = 'block';
    } else if (i === imagens.length - 1) {
        proximo.style.display = 'none';
        anterior.style.display = 'block';
    } else {
        proximo.style.display = 'block';
        anterior.style.display = 'block';
    }
}


function liking() {
    const i = [...imagens].findIndex(x => x.src === imgModal.src);
    if (!pictureModal.classList.contains('liked')) {
        pictureModal.classList.add('liking');
        setTimeout(function () {
            pictureModal.classList.remove('liking');
            picture[i].classList.toggle('liked');
            verificarModal();
        }, 1500);
    } else {
        picture[i].classList.toggle('liked');
        verificarModal();
    }
}

// abrir menu
txtMenu.forEach(elemento => {
    menu.addEventListener('click', () => {
        elemento.classList.remove("escondido")
        menu.classList.add("escondido");
        fecharMenu.classList.remove("escondido");
    })
})

//fechar menu
txtMenu.forEach(elemento => {
    fecharMenu.addEventListener('click', () => {
        elemento.classList.add("escondido")
        menu.classList.remove("escondido");
        fecharMenu.classList.add("escondido");
    })
})

//chamar modal
imagens.forEach(img => {
    img.addEventListener("click", (event) => {
        modal.classList.remove("oculta");
        imgModal.src = event.target.src;
        verificarModal();
    })
})

//fechar modal
fecharModal.addEventListener("click", () => {
    modal.classList.add("oculta");
});

proximo.addEventListener("click", () => {
    avancar();
})

anterior.addEventListener("click", () => {
    voltar();
})

document.addEventListener('keydown', (event) => {
    const code = event.code;
    console.log(code)
    if (!modal.classList.contains('oculta')) {
        if (code === "Escape") {
            modal.classList.toggle('oculta');
        } else if (code === "ArrowRight") {
            avancar();
        } else if (code === "ArrowLeft") {
            voltar();
        }
    }
});


// curtida

const picture = document.querySelectorAll('.galeria picture');
const pictureModal = document.querySelector('.modal picture');

imgModal.addEventListener('dblclick', liking);

// filtros

// Filtering like
const favorito = document.querySelector('.favorito');
const inicio = document.querySelector('.inicio')
const foto = document.querySelectorAll('.foto');
const titulo = document.querySelector('h1');

inicio.addEventListener('click', () => {
    if (favorito.classList.contains('active')) {
        inicio.classList.add('active');
        favorito.classList.remove('active');
        inicio.children[0].src = './assets/active-home.svg'
        favorito.children[0].src = './assets/inactive-like.svg';
        console.log(titulo.textContent)
        titulo.textContent = 'Início';
    }
    foto.forEach((pic) => pic.style.display = 'block');
});

favorito.addEventListener('click', () => {
    if (inicio.classList.contains('active')) {
        inicio.classList.remove('active');
        favorito.classList.add('active');
        favorito.children[0].src = './assets/active-like.svg'
        inicio.children[0].src = './assets/inactive-home.svg';
        titulo.textContent = 'Favoritos';
        console.log(titulo.textContent)
    }
    foto.forEach((pic) => {
        if (!pic.children[0].classList.contains('liked')) {
            pic.style.display = 'none';
        }
    });
});

