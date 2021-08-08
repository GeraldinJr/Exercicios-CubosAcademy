const input = document.querySelector("input");

const lista = document.querySelectorAll("li");

function filtrar(event) {
    if (event.code === "Enter") {
        lista.forEach(element => {
            element.classList.remove('escondido');

            if (input.value && !element.textContent.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())) {
                element.classList.add("escondido");
            }
        });

        event.target.value = "";

    }

}