const btnFormulario = document.querySelector('.formulário__botão-salvar');
const nome = document.querySelector(".nome");
const descricao = document.querySelector(".descrição");
const linguagem = document.querySelector(".linguagem");
const cor = document.querySelector(".cor");
const codigo = document.querySelector("code");
const chave = document.querySelector(".chav");

btnFormulario.addEventListener("click", (e) => {

    e.preventDefault();

    const projeto = {
        "nome": nome.value,
        "descricao": descricao.value,
        "linguagem": linguagem.value.toLowerCase(),
        "cor": cor.value,
        "codigo": codigo.textContent,
        "editor": codigo.classList.contains("hljs"),
        "comentarios": Math.floor(Math.random()*100),
        "curtidas": Math.floor(Math.random()*100),
        "curtido":false,
    }

    if (!codigo.textContent){
        alert ("Não há código a salvar.")

    } else {
    if (localStorage.length == 0) {

        const key = (localStorage.length+1).toString();

        localStorage.setItem(key, JSON.stringify(projeto));
        window.location.href = "./comunidade.html";

    } else if (chave.innerText != "") {
        const key = chave.innerText;
        localStorage.setItem(key, JSON.stringify(projeto));
        window.location.href = "./comunidade.html";

    } else {
        const keys = Object.keys(localStorage);
        const keysOrdenadas = keys.sort(function(a,b){return a-b}); 
        const ultimaChave = keysOrdenadas[keysOrdenadas.length-1];
        const key = (parseInt(ultimaChave) + 1).toString();

        localStorage.setItem(key, JSON.stringify(projeto));
        window.location.href = "./comunidade.html";
    }
    }

})