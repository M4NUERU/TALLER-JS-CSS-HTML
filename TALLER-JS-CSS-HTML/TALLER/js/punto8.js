function identificarParesImpares() {
    var numeros = document.getElementById("numeros").value;
    var numerosArray = numeros.split(',').map(num => parseInt(num));
    var resultado = document.getElementById("resultado");
    var pares = [];
    var impares = [];

    for (var i = 0; i < numerosArray.length; i++) {
        if (!isNaN(numerosArray[i]) && Number.isInteger(numerosArray[i])) {
            if (numerosArray[i] % 2 === 0) {
                pares.push(numerosArray[i]);
            } else {
                impares.push(numerosArray[i]);
            }
        }
    }

    if (pares.length > 0 && impares.length > 0) {
        resultado.innerHTML = `Números pares: ${pares.join(', ')}<br>Números impares: ${impares.join(', ')}`;
    } else if (pares.length > 0) {
        resultado.innerHTML = `Todos los números son pares: ${pares.join(', ')}`;
    } else if (impares.length > 0) {
        resultado.innerHTML = `Todos los números son impares: ${impares.join(', ')}`;
    } else {
        resultado.textContent = "No se ingresaron números enteros válidos.";
    }
}
