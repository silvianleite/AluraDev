const cards = document.querySelectorAll(".editor__janela");
let key = "";

cards.forEach(card => {
    card.addEventListener('click', (e) => {
        e.preventDefault();

        const elemento = e.target;

        const code = elemento.querySelector("code");

        const containsPreview = elemento.classList.contains("preview");

        if (containsPreview) {
            if (elemento.classList.contains("hljs")) {
            const elementoChave = elemento.parentElement.parentElement.parentElement;
            const chave = elementoChave.classList[1];
            const key = chave.slice(5);
            localStorage.setItem(0, JSON.stringify(key));
            } else {
            const elementoChave = elemento.parentElement.parentElement;
            const chave = elementoChave.classList[1];
            const key = chave.slice(5);
            localStorage.setItem(0, JSON.stringify(key));
            }
        } else {
            const elementoChave = elemento.parentElement;
            const chave = elementoChave.classList[1];
            const key = chave.slice(5);
            localStorage.setItem(0, JSON.stringify(key));
        }

        window.location.href = "./index.html";
        //window.open("./index.html", '_blank');

    })
})
