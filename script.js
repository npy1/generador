function calculateEAN13CheckDigit(code) {
    let sum = 0;
    for (let i = 0; i < 12; i++) {
        sum += parseInt(code[i]) * (i % 2 === 0 ? 1 : 3);
    }
    const checkDigit = (10 - (sum % 10)) % 10;
    return checkDigit.toString();
}




// Función para resetear todos los campos del formulario
document.getElementById("resetButton").addEventListener("click", function() {
    document.getElementById("etiquetaForm").reset();
});
