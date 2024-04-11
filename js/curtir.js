const btnCurtir = document.querySelectorAll(".curtidas__imagem");

btnCurtir.forEach(card => {
    card.addEventListener("click", (e) => {
        const elemento = e.target;

        const elementoChave = elemento.parentElement.parentElement.parentElement.parentElement.parentElement;
        const chave = elementoChave.classList[1];
        const key = chave.slice(5);
        const projeto = JSON.parse(localStorage.getItem(key));
        
        if (projeto.curtido == false) {
            projeto.curtidas = projeto.curtidas + 1;
            projeto.curtido = true;
            localStorage.setItem(key, JSON.stringify(projeto));

        } else {
            projeto.curtidas = projeto.curtidas - 1;
            projeto.curtido = false;
            localStorage.setItem(key, JSON.stringify(projeto));
        }

        window.location.reload(true);
    })
    })
