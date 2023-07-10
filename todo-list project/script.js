const ul = document.querySelector(".todo-list");
const submit = document.querySelector("#submitBtn");
const input = document.querySelector("#inputField");
let editText = null;



// Submit functionality
submit.addEventListener("click", (e) => {
    e.preventDefault();

    if(submit.value == "Edit") {
        editText.target.parentNode.previousElementSibling.innerText = input.value;
        console.log(typeof prevElement);
        console.log(typeof input.value);
        editTodo(prevElement, input.value);
        submit.value = "Add";
        input.value = "";
    } else {
        const li = document.createElement("li");

        const liElement = `
            <span class="text">${input.value}</span>
            <div class="todo-buttons">
                <button class="todo-btn edit">Edit</button>
                <button class="todo-btn remove">Remove</button>
            </div>`;
    
        li.innerHTML = liElement;
        ul.appendChild(li);
        saveTodo(input.value);
        input.value = "";
    }
});


// Edit and Remove Functionality
ul.addEventListener("click", (e) => {
    if(e.target.classList.contains("edit")) {
        input.value = e.target.parentNode.previousElementSibling.innerText;
        submit.value = "Edit";
        editText = e;
        prevElement = e.target.parentNode.previousElementSibling.innerText;
    } 

    if(e.target.classList.contains("remove")) {
        const targetedLi = e.target.parentElement.parentElement;
        ul.removeChild(targetedLi);
        removeTodo(targetedLi);
    } 
    // console.log(e.target);
});


// Save TODO to Local Storage
const saveTodo = (todo) => {
    let todoList;
    if(localStorage.getItem("todoList") == null) {
        todoList = [];
    } else {
        todoList = JSON.parse(localStorage.getItem("todoList"));
    }
    todoList.push(todo);
    localStorage.setItem("todoList", JSON.stringify(todoList));
}

// Get TODO from Local Storage
const getTodo = () => {
    let todoList;
    if(localStorage.getItem("todoList") == null) {
        todoList = [];
    } else {
        todoList = JSON.parse(localStorage.getItem("todoList"));
        todoList.forEach((element) => {
            const li = document.createElement("li");

            const liElement = `
                <span class="text">${element}</span>
                <div class="todo-buttons">
                    <button class="todo-btn edit">Edit</button>
                    <button class="todo-btn remove">Remove</button>
                </div>`;
        
            li.innerHTML = liElement;
            ul.appendChild(li);
            // saveTodo(input.value);
            // input.value = "";
        })
    }
}

// Remove TODO from Local Storage
const removeTodo = (todoElement) => {
    let todoList;
    if(localStorage.getItem("todoList") == null) {
        todoList = [];
    } else {
        todoList = JSON.parse(localStorage.getItem("todoList"));
    }

    let todoText = todoElement.children[0].innerText;
    let todoIndex = todoList.indexOf(todoText);
    todoList.splice(todoIndex, 1);
    localStorage.setItem("todoList", JSON.stringify(todoList));
}

// Edit TODO from Local Storage
const editTodo = (prevText, newText)  => {
    console.log(prevText);
    // console.log(todoList);

    let todoList = JSON.parse(localStorage.getItem("todoList"));
    console.log(todoList);
    let todoIndex = todoList.indexOf(prevText);
    console.log(todoIndex);
    todoList[todoIndex] = newText;
    localStorage.setItem("todoList", JSON.stringify(todoList));
}

document.addEventListener("DOMContentLoaded", getTodo);