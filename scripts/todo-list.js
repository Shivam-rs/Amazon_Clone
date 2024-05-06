const todolist = [];

function addTodo(){
    const inputElement = document.querySelector('.js-input-todo-name');
    const inputDueDate = document.querySelector('.js-due-date');

    const name = inputElement.value;
    const duedate = inputDueDate.value;

    todolist.push({name, duedate});

    inputElement.value = '';
    inputDueDate.value = '';
    console.log(todolist)
}

function displayTodo(){
    const inputElement = document.querySelector('.js-display-todo');
    let print = '';
    for(let i = 0; i<todolist.length; i++){
        print +=    `<div>${todolist[i].name}</div>
                     <div>${todolist[i].duedate}</div>
                    <button onclick="
                        todolist.splice(${i}, 1);
                        displayTodo();
                    " class="delete-button">Delete</button>`;
    }
    inputElement.innerHTML = print;
}