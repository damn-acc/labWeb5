document.addEventListener('DOMContentLoaded', () => {
    function createForm(block) {
        if (block.querySelector('.list-form')) return;

        const form = document.createElement('form');
        form.classList.add('list-form');
        const input = document.createElement('input');
        input.classList.add('form-input');
        input.placeholder = 'Введіть пункт списку';
        const button = document.createElement('button');
        button.type = 'button';
        button.textContent = 'Додати пункт';

        const ul = document.createElement('ul');
        form.append(input, button, ul);
        block.appendChild(form);

        button.addEventListener('click', () => {
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
        saveButton.addEventListener('click', () => {
            const items = Array.from(ul.children).map(item => item.textContent);
            localStorage.setItem(`list_${block.id}`, JSON.stringify(items));
            alert('Список збережено!');
            block.innerHTML = `<ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
        });

        form.appendChild(saveButton);
    }

    for(let i=1; i<=6; i++){
        let block = document.getElementById(i);
        block.addEventListener('dblclick', () => {
            createForm(block);
        });

        const savedList = localStorage.getItem(`list_${block.id}`);
        if (savedList) {
            const listItems = JSON.parse(savedList);
            block.querySelector('.initial-content').style.display = 'none';
            block.innerHTML = `<ul>${listItems.map(item => `<li>${item}</li>`).join('')}</ul>`;
        }
    };
});