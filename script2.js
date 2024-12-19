document.getElementById('calculateAreaButton').addEventListener('click', function () {
    const lengthInput = document.getElementById('length');
    const widthInput = document.getElementById('width');

    const length = parseFloat(lengthInput.value);
    const width = parseFloat(widthInput.value);

    if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
        alert('Будь ласка, введіть коректні значення для довжини та ширини.');
        return;
    }

    const area = length * width;

    const resultParagraph = document.getElementById('output-text');
    resultParagraph.textContent = `Площа прямокутника: ${area}`;
});
