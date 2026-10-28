document.addEventListener('DOMContentLoaded', function() {
    const itemInput = document.getElementById('itemInput');
    const addButton = document.getElementById('addButton');
    const shoppingList = document.getElementById('shoppingList');

    addButton.addEventListener('click', function() {
        const itemText = itemInput.value.trim();

        if (itemText === "") {
            alert("Please enter an item!");
            return;
        }

        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = itemText;
        li.appendChild(span);

        // Edit button logic...
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', function() {
            if (editButton.textContent === 'Edit') {
                const editInput = document.createElement('input');
                editInput.type = 'text';
                editInput.value = span.textContent;
                li.replaceChild(editInput, span);
                editButton.textContent = 'Save';
            } else {
                const editInput = li.querySelector('input');
                const newText = editInput.value.trim();
                if (newText === "") {
                    alert("Item text cannot be empty!");
                    return;
                }
                span.textContent = newText;
                li.replaceChild(span, editInput);
                editButton.textContent = 'Edit';
            }
        });
        li.appendChild(editButton);

        // Remove button logic...
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function() {
            shoppingList.removeChild(li);
        });
        li.appendChild(removeButton);

        shoppingList.appendChild(li);

        itemInput.value = "";
        itemInput.focus();
    });
});