
let seletor = document.querySelector(".titulo");
seletor.textContent = "Aparecida Nutrição";

const paciente = document.querySelectorAll(".paciente");
console.log(paciente)

paciente.forEach(function percorrer(paciente) {
    const tdPeso = paciente.querySelector(".info-peso");
    const tdAltura = paciente.querySelector(".info-altura");
    const tdIMC = paciente.querySelector(".info-imc");

    const peso = tdPeso.textContent;
    const altura = tdAltura.textContent;



    //validando o peso

    if (!pesoValido(peso)) {
        console.log("Peso inválido!");
        tdIMC.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    } else if (!alturaValida(altura)) {
        console.log("Altura inválido")
        tdIMC.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    } else {
        tdIMC.textContent = calculaIMC(peso, altura)
    }
})

function pesoValido(peso) {
    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}

function alturaValida(altura) {
    if (altura >= 0 && altura <= 3) {
        return true;
    } else {
        return false;
    }
}

function calculaIMC(peso, altura) {
    let imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

