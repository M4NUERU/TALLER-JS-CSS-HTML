document.addEventListener("DOMContentLoaded", function () {
    // Agrega un evento de escucha al campo de texto
    document.getElementById("texto").addEventListener("input", function () {
        var texto = this.value;
        var contador = document.getElementById("contador");
        contador.textContent = texto.length;
    });
});

