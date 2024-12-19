const block5 = document.querySelector('.block-5');
const boldCheckbox = document.getElementById('boldCheckbox');

function updateBoldStyle() {
    if (boldCheckbox.checked) {
        block5.style.fontWeight = 'bold';
    } else {
        block5.style.fontWeight = 'normal';
    }

    localStorage.setItem('isBold', boldCheckbox.checked ? 'true' : 'false');
}

function setBoldStyleOnLoad() {
    const isBold = localStorage.getItem('isBold');
    
    if (isBold === 'true') {
        block5.style.fontWeight = 'bold';
        boldCheckbox.checked = true;
    } else {
        block5.style.fontWeight = 'normal';
        boldCheckbox.checked = false;
    }
}

block5.addEventListener('focus', updateBoldStyle);

boldCheckbox.addEventListener('change', updateBoldStyle);

document.addEventListener('DOMContentLoaded', setBoldStyleOnLoad);
