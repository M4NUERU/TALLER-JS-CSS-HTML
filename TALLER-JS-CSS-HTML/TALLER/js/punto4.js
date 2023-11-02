function calcularPromedio() {
    var nombre = document.getElementById("nombre").value;
    var materia = document.getElementById("materia").value;
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);
    var promedio = (nota1 + nota2 + nota3) / 3;
    var resultado = document.getElementById("resultado");

    if (promedio >= 3.0) {
        resultado.textContent = `${nombre}, pasaste la materia "${materia}" con un promedio de ${promedio.toFixed(2)}`;
        resultado.style.color = "green"; //  verde para indicar que pasaste
    } else {
        resultado.textContent = `${nombre}, perdiste la materia "${materia}" con un promedio de ${promedio.toFixed(2)}`;
        resultado.style.color = "red"; //  rojo para indicar que perdiste
    }
}
