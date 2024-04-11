const menuImagem = document.querySelector(".cabeçalho__menu-imagem");
const menuBotao = document.querySelector(".cabeçalho__menu-botão");
const menuLateral = document.querySelector(".menu__lateral");
const usuario = document.querySelector(".usuário");

menuBotao.addEventListener('click', () => {
    if (menuImagem.getAttribute("src") == "img/menu.svg") {
        menuImagem.setAttribute("src", "img/menu_fechar.svg");
        menuLateral.style.display = "block";
        usuario.style.display = "block";
    } else {
        menuImagem.setAttribute("src", "img/menu.svg");
        menuLateral.style.display = "none";
        usuario.style.display = "none";
    }
});