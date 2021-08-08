const olho = document.querySelector(".olho img");
const divOlho = document.querySelector(".olho");
const inputSenha = document.querySelector("#senha");

olho.addEventListener("click", function (event) {

    if (olho.src.includes("assets/olho-fechado.svg")) {

        olho.src = "assets/olho-aberto.svg";
        inputSenha.type = "text";
        divOlho.classList.remove("fechado");
        divOlho.classList.add("aberto");
    }

    else {

        olho.src = "assets/olho-fechado.svg";
        inputSenha.type = "password";
        divOlho.classList.remove("aberto");
        divOlho.classList.add("fechado");

    }


})