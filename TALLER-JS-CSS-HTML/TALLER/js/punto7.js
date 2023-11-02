function verificarDivisibilidad() {
    var numeroA = parseInt(document.getElementById("numeroA").value);
    var numeroB = parseInt(document.getElementById("numeroB").value);
    var resultado = document.getElementById("resultado");

    if (isNaN(numeroA) || isNaN(numeroB) || numeroA < 0 || numeroB < 0) {
        resultado.textContent = "Por favor, ingresa dos números enteros positivos válidos.";
        resultado.style.color = "red"; // Estilo de color de texto rojo para indicar un error
    } else {
        if (numeroA % numeroB === 0) {
            resultado.textContent = `${numeroA} es divisible por ${numeroB}.`;
            resultado.style.color = "green"; // Estilo de color de texto verde para indicar divisibilidad
        } else {
            resultado.textContent = `${numeroA} no es divisible por ${numeroB}.`;
            resultado.style.color = "blue"; // Estilo de color de texto azul para indicar no divisibilidad
        }
    }
}
