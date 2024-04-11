const barraPesquisa = document.querySelector(".cabeçalho__pesquisa");
const botaoPesquisa = document.querySelector(".cabeçalho__pesquisa-lupa");

botaoPesquisa.addEventListener('click', () => {
    if(barraPesquisa.style.display == "none") {
        botaoPesquisa.setAttribute("src", "img/menu_fechar.svg");
        barraPesquisa.style.display = "block";
    } else {
        botaoPesquisa.setAttribute("src", "img/pesquisar.svg");
        barraPesquisa.style.display = "none";
    }
})