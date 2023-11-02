function verificarEdad() {
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    var resultado = document.getElementById("resultado");

    if (nombre.trim() === "" || edad.trim() === "") {
        resultado.textContent = "Por favor, ingresa tu nombre y edad.";
        resultado.style.color = "red"; // color de texto rojo para indicar un error
    } else {
        edad = parseInt(edad); // Convierte la edad a un número entero

        if (edad >= 18) {
            resultado.textContent = nombre + " es mayor de edad.";
            resultado.style.color = "green"; // texto verde para indicar mayor de edad
        } else {
            resultado.textContent = nombre + " no es mayor de edad.";
            resultado.style.color = "blue"; // texto azul para indicar menor de edad
        }
    }
}
