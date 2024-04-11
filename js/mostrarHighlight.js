const btnHighlight = document.querySelector(".editor__botão");
const codigoHighlight = document.querySelector("code");
const btnLinguagem = document.querySelector(".formulário__select");

btnHighlight.addEventListener('click', () => {
    if (!codigoHighlight.classList.contains("hljs")) {
    const codigo = codigoHighlight.innerText;
    codigoHighlight.innerHTML = `<pre><code class="preview language-${btnLinguagem.value.toLowerCase()}" contenteditable="true" aria-label="Editor de código"></code></pre>`;
    codigoHighlight.textContent = codigo;
    hljs.highlightElement(codigoHighlight);
    }

    else {
        const codigo = codigoHighlight.innerText;
        codigoHighlight.dataset.highlighted = "";
        codigoHighlight.innerHTML = `<code class="preview language-${btnLinguagem.value.toLowerCase()}" contenteditable="true" aria-label="Editor de código" data-highlighted="no"></code>`;
        codigoHighlight.textContent = codigo;
        codigoHighlight.classList.remove("hljs");
    }
})


codigoHighlight.onkeydown = function(e) {
    if(e.key == "Tab") {
        e.preventDefault();
    }
}