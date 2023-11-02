function identificarParImpar() {
    var numero = parseFloat(document.getElementById("numero").value);
    var resultado = document.getElementById("resultado");

    if (isNaN(numero) || numero < 0 || !Number.isInteger(numero)) {
        resultado.textContent = "Por favor, ingresa un número entero positivo válido.";
        resultado.style.color = "red"; // Estilo de color de texto rojo para indicar un error
    } else {
        if (numero % 2 === 0) {
            resultado.textContent = `El número ${numero} es par.`;
            resultado.style.color = "green"; // Estilo de color de texto verde para indicar que es par
        } else {
            resultado.textContent = `El número ${numero} es impar.`;
            resultado.style.color = "blue"; // Estilo de color de texto azul para indicar que es impar
        }
    }
}
