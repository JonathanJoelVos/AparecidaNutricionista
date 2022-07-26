let input = document.querySelector("#busca");

input.addEventListener("input", function () {
    let pacientes = document.querySelectorAll(".paciente");
    if (this.value.length > 0) {
        let valor = this.value
        pacientes.forEach(function (elemento) {
            let nomeTd = elemento.querySelector(".info-nome")
            let nome = nomeTd.textContent;
            let expressao = new RegExp(valor, "i")
            if (!expressao.test(nome)) {
                elemento.classList.add("invisivel")
            } else {
                elemento.classList.remove("invisivel")
            }
        })
    } else {
        pacientes.forEach(function (elemento) {
            elemento.classList.remove("invisivel")
        })
    }
})