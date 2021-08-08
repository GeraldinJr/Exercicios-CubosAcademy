const imagens = document.querySelectorAll(".imagens img");
const modal = document.querySelector(".modal");
const linkModal = document.querySelector(".modal a");
const imgModal = document.querySelector(".modal img");

imagens.forEach((img) => {
    img.addEventListener("click", (event) => {
        linkModal.href = event.target.src;
        imgModal.src = event.target.src;
        modal.style.display = "flex";

    })
})

modal.addEventListener("click", () => {
    modal.style.display = "none";
})

linkModal.addEventListener("click", (event) => {
    event.stopImmediatePropagation();
})