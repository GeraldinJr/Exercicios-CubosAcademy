const faq = document.querySelector(".faq");
const interrogacao = document.querySelector(".interrogacao");

interrogacao.addEventListener("click", () => {
    if (faq.style.visibility === 'hidden') {
        faq.style.visibility = 'visible';
        faq.style.opacity = '1';
    } else {
        faq.style.visibility = 'hidden';
        faq.style.opacity = '0';
    }
})