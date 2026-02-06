
let todolist = JSON.parse(localStorage.getItem('todolist')) || [];

function rendertodolist() {
    let todoListHTML = '';

    for (let i = 0; i < todolist.length; i++) {
        const todo = todolist[i];
        const html = `
            <p class="task-item">
                ${todo}
                <button class="delete-btn" onclick="
                    todolist.splice(${i}, 1);
                    rendertodolist();
                ">Delete</button>
            </p>
        `;
        todoListHTML += html;
    }

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
    localStorage.setItem('todolist', JSON.stringify(todolist));
}

function addTask() {
    const inputBox = document.querySelector('.input-box');
    const taskName = inputBox.value.trim();

    if (taskName === '') {
        alert("You must write something!");
        return;
    }

    todolist.push(taskName);
    inputBox.value = '';
    rendertodolist();
}

/*  NEW CODE: Add task on Enter key */
const inputBox = document.querySelector('.input-box');

inputBox.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

/* Initial render */
rendertodolist();
