const projetos = document.querySelector(".projetos");
const keys = Object.keys(localStorage);
const keysOrdenadas = keys.sort(function(a,b){return a-b});

keysOrdenadas.forEach(key => {
    const novoCard = JSON.parse(localStorage.getItem(key));
    adicionarCard(novoCard, key);

})


function adicionarCard(novoProjeto, chave) {
    if(novoProjeto.curtido == false) {
    
    if (novoProjeto.editor == true) {
        projetos.innerHTML += `
        <section class="editor__container chave${chave}">
            <div class="editor__janela" style="border: 20px solid ${novoProjeto.cor};">
                <img class="editor__botões" src="img/mac_buttons.svg" alt="">
                <pre><code class="preview language-${novoProjeto.linguagem} hl" contenteditable="false" aria-label="Editor de código">${novoProjeto.codigo}</code></pre>
            </div>
        <div class="projeto__detalhes">
            <h2 class="projeto__titulo">${novoProjeto.nome}</h2>
            <span class="projeto__descrição">${novoProjeto.descricao}</span>
            <div class="projeto__pessoal">
                <div class="projeto__respostas">
                    <div class="projeto__comentários">
                        <img class="comentários__imagem" src="img/comentarios.svg" alt="">
                        <span class="comentários__texto">${novoProjeto.comentarios}</span>
                    </div>
                    <div class="projeto__curtidas">
                        <img class="curtidas__imagem" src="img/curtidas.svg" alt="">
                        <span class="curtidas__texto">${novoProjeto.curtidas}</span>
                    </div>
                </div>
                <div class="projeto__usuário">
                    <img src="img/Photo.svg" alt="Foto do perfil" class="projeto__usuário-foto">
                    <span class="projeto__usuário-nome">Harry</span>
                </div>
            </div>
        </div>
    </section>
    `

    }

    else {
        projetos.innerHTML += `
        <section class="editor__container chave${chave}">
            <div class="editor__janela" style="border: 20px solid ${novoProjeto.cor};">
                <img class="editor__botões" src="img/mac_buttons.svg" alt="">
                <code class="preview language-${novoProjeto.linguagem}" contenteditable="false" aria-label="Editor de código">${novoProjeto.codigo}</code>
            </div>
        <div class="projeto__detalhes">
            <h2 class="projeto__titulo">${novoProjeto.nome}</h2>
            <span class="projeto__descrição">${novoProjeto.descricao}</span>
            <div class="projeto__pessoal">
                <div class="projeto__respostas">
                    <div class="projeto__comentários">
                        <img class="comentários__imagem" src="img/comentarios.svg" alt="">
                        <span class="comentários__texto">${novoProjeto.comentarios}</span>
                    </div>
                    <div class="projeto__curtidas">
                        <img class="curtidas__imagem" src="img/curtidas.svg" alt="">
                        <span class="curtidas__texto">${novoProjeto.curtidas}</span>
                    </div>
                </div>
                <div class="projeto__usuário">
                    <img src="img/Photo.svg" alt="Foto do perfil" class="projeto__usuário-foto">
                    <span class="projeto__usuário-nome">Harry</span>
                </div>
            </div>
        </div>
    </section>
    `
    }

} else {

    if (novoProjeto.editor == true) {
        projetos.innerHTML += `
        <section class="editor__container chave${chave}">
            <div class="editor__janela" style="border: 20px solid ${novoProjeto.cor};">
                <img class="editor__botões" src="img/mac_buttons.svg" alt="">
                <pre><code class="preview language-${novoProjeto.linguagem} hl" contenteditable="false" aria-label="Editor de código">${novoProjeto.codigo}</code></pre>
            </div>
        <div class="projeto__detalhes">
            <h2 class="projeto__titulo">${novoProjeto.nome}</h2>
            <span class="projeto__descrição">${novoProjeto.descricao}</span>
            <div class="projeto__pessoal">
                <div class="projeto__respostas">
                    <div class="projeto__comentários">
                        <img class="comentários__imagem" src="img/comentarios.svg" alt="">
                        <span class="comentários__texto">${novoProjeto.comentarios}</span>
                    </div>
                    <div class="projeto__curtidas">
                        <img class="curtidas__imagem" src="img/curtida.svg" alt="">
                        <span class="curtidas__texto">${novoProjeto.curtidas}</span>
                    </div>
                </div>
                <div class="projeto__usuário">
                    <img src="img/Photo.svg" alt="Foto do perfil" class="projeto__usuário-foto">
                    <span class="projeto__usuário-nome">Harry</span>
                </div>
            </div>
        </div>
    </section>
    `

    }

    else {
        projetos.innerHTML += `
        <section class="editor__container chave${chave}">
            <div class="editor__janela" style="border: 20px solid ${novoProjeto.cor};">
                <img class="editor__botões" src="img/mac_buttons.svg" alt="">
                <code class="preview language-${novoProjeto.linguagem}" contenteditable="false" aria-label="Editor de código">${novoProjeto.codigo}</code>
            </div>
        <div class="projeto__detalhes">
            <h2 class="projeto__titulo">${novoProjeto.nome}</h2>
            <span class="projeto__descrição">${novoProjeto.descricao}</span>
            <div class="projeto__pessoal">
                <div class="projeto__respostas">
                    <div class="projeto__comentários">
                        <img class="comentários__imagem" src="img/comentarios.svg" alt="">
                        <span class="comentários__texto">${novoProjeto.comentarios}</span>
                    </div>
                    <div class="projeto__curtidas">
                        <img class="curtidas__imagem" src="img/curtida.svg" alt="">
                        <span class="curtidas__texto">${novoProjeto.curtidas}</span>
                    </div>
                </div>
                <div class="projeto__usuário">
                    <img src="img/Photo.svg" alt="Foto do perfil" class="projeto__usuário-foto">
                    <span class="projeto__usuário-nome">Harry</span>
                </div>
            </div>
        </div>
    </section>
    `
    }

}

}



const selectedCards = document.querySelectorAll("editor__janela");

selectedCards.forEach(janela => {
    const card = janela.querySelector("code");
    if (card.classList.contains(hl)) {
        hljs.highlightElement(card);
    }
})