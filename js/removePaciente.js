let tabela = document.querySelector("#tabela__pacientes-body");
//cria uma array

tabela.addEventListener("dblclick", function (event) {
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function () {
        event.target.parentNode.remove()
    }, 200)
})