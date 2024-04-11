const titulo = document.querySelector(".nome");
const desc = document.querySelector(".descrição");
const ling = document.querySelector(".linguagem");
const color = document.querySelector(".cor");
const cod = document.querySelector("code");
const chav = document.querySelector(".chav");

function identificarProjeto() {
    const identificador = JSON.parse(localStorage.getItem(0));
    chav.textContent = identificador;
    const projeto = JSON.parse(localStorage.getItem(identificador));
    return projeto;
}

function mostrarProjeto(projeto) {
    titulo.value = projeto.nome;
    desc.value = projeto.descricao;
    ling.value = projeto.linguagem;
    color.value = projeto.cor;
    color.style.backgroundColor = projeto.cor;
    const editorCaixa = document.querySelector(".editor__janela");
    editorCaixa.style.border = `20px solid ${projeto.cor}`;
    cod.textContent = projeto.codigo;

    if (projeto.editor==true) {
        const codigo = cod.innerText;
        cod.innerHTML = `<pre><code class="preview language-${btnLinguagem.value.toLowerCase()}" contenteditable="true" aria-label="Editor de código"></code></pre>`;
        cod.textContent = codigo;
        hljs.highlightElement(cod);
    }
}

if (localStorage.getItem(0)) {
    mostrarProjeto(identificarProjeto());
    localStorage.removeItem(0);
}