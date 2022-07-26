const botaoBuscar = document.querySelector("#buscar--paciente");
let erro = document.getElementById("erro-ajax");

botaoBuscar.addEventListener("click", function () {
    let xhr = new XMLHttpRequest;
    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");
    xhr.send();
    xhr.addEventListener("load", function () {

        if (xhr.status == 200) {
            let objeto = JSON.parse(xhr.responseText);
            objeto.forEach(element => {
                addPacienteNaTabela(element);
            });
            erro.classList.add("invisivel")
        } else {
            console.log(xhr.status);
            erro.classList.remove("invisivel")
        }

    })
})