const btnSalvar = document.querySelector(".formulário__botão-salvar");
const btnEditor = document.querySelector(".btn-editor");
const btnComunidade = document.querySelector(".btn-comunidade");
const imagemBtnEditor = document.querySelector(".btn-code")
const imagemBtnComunidade = document.querySelector(".btn-user")

btnEditor.addEventListener('click', () => {
    window.location.href = "index.html";
})

btnComunidade.addEventListener('click', () => {
    window.location.href = "comunidade.html";
})