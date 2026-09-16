const newButton = document.getElementById("newButton");
const todoList = document.getElementById("ft_list");

newButton.addEventListener("click", function () {

    const todoText = prompt("Enter a new TO DO:");

    if (todoText === null || todoText.trim() === "") {
        return;
    }
    createTodo(todoText.trim());
    saveTodos();
});

function createTodo(text) {

    const todo = document.createElement("div");

    todo.className = "todo";
    todo.textContent = text;

    todo.addEventListener("click", function () {

        const answer = confirm("Do you want to remove this TO DO?");

        if (answer === true) {
            todo.remove();
            saveTodos();
        }
    });

    todoList.prepend(todo);
}

function saveTodos() {

    const todoElements = document.querySelectorAll(".todo");
    const todos = [];

    for (let i = 0; i < todoElements.length; i++) {
        todos.push(todoElements[i].textContent);
    }

    const todoData = JSON.stringify(todos);

    document.cookie =
        "todoList=" +
        encodeURIComponent(todoData) +
        "; max-age=31536000; path=/";
}

function getCookie(cookieName) {

    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {

        const cookie = cookies[i].trim();
        
        if (cookie.startsWith(cookieName + "=")) {
            return cookie.substring(cookieName.length + 1);
        }
    }
    return null;
}

function loadTodos() {

    const savedCookie = getCookie("todoList");

    if (savedCookie === null) {
        return;
    }
    const todos = JSON.parse(decodeURIComponent(savedCookie));

    for (let i = todos.length - 1; i >= 0; i--) {
        createTodo(todos[i]);
    }
}

loadTodos();