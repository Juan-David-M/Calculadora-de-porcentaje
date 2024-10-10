document.addEventListener("DOMContentLoaded", function() {
    const valorInput = document.getElementById("valor");
    const calcularButton = document.getElementById("calcular");
    const resultadoParagraph = document.getElementById("resultado");

    calcularButton.addEventListener("click", function(event) {
        event.preventDefault();
        const valor = parseFloat(valorInput.value);
        const percentage = valor * 0.8;
        const total = valor + percentage;
        resultadoParagraph.textContent = `El resultado es: ${total.toFixed(2)}`;
    });
});