let contact = document.getElementById("contact");
let modal = document.getElementById("modal");
let closeModal = document.getElementById("close");

let progressbar = document.querySelector(".progressbar");

function ScrollPregressBar() {

    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight;
    let clientHeigth = document.documentElement.clientHeight;

    let windowsHeigth = scrollHeight - clientHeigth;
    let porcentaje = (scrollTop / windowsHeigth) * 100;

    progressbar.style.width = porcentaje + "%";
}

window.addEventListener("scroll", ScrollPregressBar);


contact.addEventListener("click", () => {modal.style.display = "block";contact.style.display = "none"; });

closeModal.addEventListener("click", () => {modal.style.display = "none";contact.style.display = "block";});

// function showModal() {modal.style.display = "block";}

ScrollReveal().reveal('.entrada');
ScrollReveal().reveal('.clientComprador', {delay: 400});
ScrollReveal().reveal('.contenidoLing', {delay: 400});
ScrollReveal().reveal('.socioComerc', {delay: 400});
ScrollReveal().reveal('.promoContent', {delay: 400});
ScrollReveal().reveal('.contentPromo', {delay: 400});
ScrollReveal().reveal('.otroContenido', {delay: 400});
ScrollReveal().reveal('.testimonios', {delay: 400});
