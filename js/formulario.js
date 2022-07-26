function obtemPacienteDoFormulario(form) {
    let pessoa = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value)
    }

    return pessoa;
}


function montaTr(paciente) {
    let pacienteTr = document.createElement("tr"); //cria um elemento no html
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(criarTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(criarTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(criarTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(criarTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(criarTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function criarTd(dado, classe) {
    let td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe)
    return td;
}


let form = document.querySelector("#form-adiciona")
console.log(montaTr(obtemPacienteDoFormulario(form)));

let botao = document.querySelector("#adicionar--paciente");
botao.addEventListener("click", function (event) {
    event.preventDefault()

    let form = document.querySelector("#form-adiciona")
    let paciente = obtemPacienteDoFormulario(form);

    let erros = validaPaciente(paciente);

    exibirMensagensDeErro(erros);

    if (erros.length > 0) {
        return;
    }

    addPacienteNaTabela(paciente);

    form.reset();

})

function addPacienteNaTabela(paciente) {
    let pacienteTr = montaTr(paciente);
    let tabela = document.querySelector("#tabela__pacientes-body");
    tabela.appendChild(pacienteTr);
}


function validaPaciente(paciente) {
    let erros = [];

    if (paciente.nome.length == 0) {
        erros.push("Nome inválido!")
    }

    if (!pesoValido(paciente.peso)) {
        erros.push("Peso inválido!");
    }
    if (!alturaValida(paciente.altura)) {
        erros.push("Altura inválida!");
    }
    if (paciente.gordura.length == 0) {
        erros.push("O campo gordura está em branco!")
    }
    if (paciente.peso.length == 0) {
        erros.push("O campo peso está em branco!")
    }
    if (paciente.altura.length == 0) {
        erros.push("O campo altura está em branco!")
    }

    return erros;
}

function exibirMensagensDeErro(erros) {
    let ul = document.querySelector("#mensagem__erro");

    ul.innerHTML = "";

    erros.forEach(function (elemento) {
        let li = document.createElement("li");
        li.textContent = elemento;
        ul.appendChild(li);
    })
}