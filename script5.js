document.addEventListener('DOMContentLoaded', () => {
    function createForm(block) {
        if (block.querySelector('.list-form')) return;

        const form = document.createElement('form');
        form.classList.add('list-form');

        const input = document.createElement('input');
        input.classList.add('form-input');
        input.placeholder = 'Введіть пункт списку';

        const addButton = document.createElement('button');
        addButton.type = 'button';
        addButton.textContent = 'Додати пункт';

        const ul = document.createElement('ul');
        form.append(input, addButton, ul);
        block.appendChild(form);

        addButton.addEventListener('click', () => {
            const listItem = input.value.trim();
            if (listItem) {
                const li = document.createElement('li');
                li.textContent = listItem;
                ul.appendChild(li);
                input.value = '';
            }
        });

        const saveButton = document.createElement('button');
        saveButton.textContent = 'Зберегти список';
        saveButton.type = 'button';

        saveButton.addEventListener('click', () => {
            const items = Array.from(ul.children).map(item => item.textContent);
            localStorage.setItem(`list_${block.id}`, JSON.stringify(items));
            alert('Список збережено!');
            renderSavedList(block);
        });

        form.appendChild(saveButton);
    }

    function renderSavedList(block) {
        const savedList = localStorage.getItem(`list_${block.id}`);
        if (savedList) {
            const listItems = JSON.parse(savedList);
            block.innerHTML = `<ul>${listItems.map(item => `<li>${item}</li>`).join('')}</ul>`;
        }
    }

    for (let i = 1; i <= 6; i++) {
        const block = document.getElementById(i);

        renderSavedList(block);

        block.addEventListener('dblclick', () => {
            createForm(block);
        });
    }
});
