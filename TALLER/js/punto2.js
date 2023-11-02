function identificarTipoDato() {
    var valor = document.getElementById("valor").value;

    if (valor.trim() === "") {
        resultado.textContent = "Por favor, ingresa un valor antes de identificar.";
        resultado.style.color = "red"; // Estilo de color de texto rojo para indicar un error
    }else if (isNaN(valor)) {
        // Si no es un número, es un texto
        document.getElementById("resultado").textContent = "El valor ingresado es un tipo de dato texto.";
        resultado.style.color = "white";
    } else {
        // Si es un número, es un número
        document.getElementById("resultado").textContent = "El valor ingresado es un número.";
        resultado.style.color = "white";
    }
    
    


}