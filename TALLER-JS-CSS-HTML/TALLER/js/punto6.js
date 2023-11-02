function buscarContenido() {
    var texto = document.getElementById("texto").value;
    var busqueda = document.getElementById("busqueda").value;
    var resultado = document.getElementById("resultado");

    // Eliminar cualquier marca de búsqueda anterior
    resultado.innerHTML = texto;

    if (busqueda) {
        var expresion = new RegExp(busqueda, "gi"); // Expresión regular global e insensible a mayúsculas y minúsculas
        resultado.innerHTML = resultado.innerHTML.replace(expresion, function(match) {
            return '<mark>' + match + '</mark>';
        });
    }
}
