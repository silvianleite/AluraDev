const btnCor = document.querySelector(".selecionar-cor");
const editorCaixa = document.querySelector(".editor__janela")

btnCor.addEventListener("change", (event) => {
    btnCor.style.backgroundColor = event.target.value;
    editorCaixa.style.border = `20px solid ${event.target.value}`;
})