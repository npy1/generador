function calculateEAN13CheckDigit(code) {
    let sum = 0;
    for (let i = 0; i < 12; i++) {
        sum += parseInt(code[i]) * (i % 2 === 0 ? 1 : 3);
    }
    const checkDigit = (10 - (sum % 10)) % 10;
    return checkDigit.toString();
}

document.getElementById("generateButton").addEventListener("click", function() {
    const marca = document.getElementById("marca").value;
    const pattern = document.getElementById("pattern").value;
    const medida = document.getElementById("medida").value;
    const rrc = document.getElementById("rrc").value;
    const wetGrip = document.getElementById("wetGrip").value;
    const noiseValue = document.getElementById("noiseValue").value;
    const noiseLevel = document.getElementById("noiseLevel").value;
    let eanCode = document.getElementById("eanCode").value;

    // Calcula y agrega el dígito de control si es necesario
    if (eanCode.length === 12) {
        eanCode += calculateEAN13CheckDigit(eanCode);
    }

    if (pattern && medida && rrc !== "" && wetGrip !== "" && noiseValue && noiseLevel !== "" && eanCode.length === 13) {
        const url = `etiqueta.html?marca=${encodeURIComponent(marca)}&pattern=${encodeURIComponent(pattern)}&medida=${encodeURIComponent(medida)}&rrc=${encodeURIComponent(rrc)}&wetGrip=${encodeURIComponent(wetGrip)}&noiseValue=${encodeURIComponent(noiseValue)}&noiseLevel=${encodeURIComponent(noiseLevel)}&eanCode=${encodeURIComponent(eanCode)}`;
        window.location.href = url;
    } else {
        alert("Por favor, complete todos los campos y asegúrese de que el código EAN sea de 13 dígitos.");
    }
});

// Función para resetear todos los campos del formulario
document.getElementById("resetButton").addEventListener("click", function() {
    document.getElementById("etiquetaForm").reset();
});
