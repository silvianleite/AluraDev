const divParaExportar = document.getElementById("photo");
const output = document.getElementById('output');
const btnMostrar = document.querySelector(".mostrar");
const btnConverter = document.querySelector(".formato");
const form = document.querySelector(".formulário__container");
const btnHigh = document.querySelector(".high");

function mostrarImagem() {
    
    html2canvas(divParaExportar,{
        allowTaint: true,
        foreignObjectRendering: true,
        //logging: true,
        //useCORS:true,
        x: 0,
        y: 0,
    }).then(
        function(canvas) {
            output.appendChild(canvas);
            divParaExportar.style.display = "none";
            form.style.display = "none";
            btnMostrar.style.display = "none";
            btnHigh.style.display = "none";
            btnConverter.style.display = "block";
        })
}

function converterImagem() {
    const canvas = document.querySelector('canvas');
    const link = document.getElementById("link");

    if(btnConverter.value=="0") {
        console.log("formato inválido");
    }

    link.setAttribute('href', canvas.toDataURL(`image/${btnConverter.value}`))
    link.setAttribute('download', `print.${btnConverter.value}`);
    link.click();

    window.location.href = "./index.html";
}

btnMostrar.addEventListener('click', mostrarImagem);

btnConverter.addEventListener('change', converterImagem);

