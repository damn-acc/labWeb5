function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return decodeURIComponent(parts.pop().split(';').shift());
    return null;
}

function deleteCookie(name) {
    document.cookie = `${name}=; Max-Age=0; path=/;`;
}

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${date.toUTCString()}; path=/;`;
}

function handlePageLoad() {
    const savedData = getCookie("minMaxNumbers");

    if (savedData) {
        const confirmRestore = confirm(
            `Виявлено збережені дані: ${savedData}. Хочете зберегти ці дані?`
        );

        if (confirmRestore) {
            alert("Дані збережено в cookies.");
            document.getElementById("numberForm").style.display = "none";
            return;
        } else {
            deleteCookie("minMaxNumbers");
            document.getElementById("numberForm").style.display = "block";
        }
    } else {
        document.getElementById("numberForm").style.display = "block";
    }
}

function processNumbers() {
    const input = document.getElementById("numbersInput").value;

    const numbers = input
        .split(",")
        .map((num) => parseFloat(num.trim()))
        .filter((num) => !isNaN(num));

    if (numbers.length !== 10) {
        alert("Будь ласка, введіть рівно 10 чисел.");
        return;
    }

    const min = Math.min(...numbers);
    const max = Math.max(...numbers);

    const result = `Мінімальне: ${min}, Максимальне: ${max}`;
    alert(result);

    setCookie("minMaxNumbers", result, 1);
}

document.addEventListener("DOMContentLoaded", () => {
    handlePageLoad();
    document.getElementById("processButton").addEventListener("click", processNumbers);
});
