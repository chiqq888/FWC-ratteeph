$(function () {
    function createTodo(text) {
        const todo = $("<div>")
            .addClass("todo")
            .text(text);

        todo.on("click", function () {
            if (confirm("Do you want to remove this TO DO?")) {
                $(this).remove();
                saveTodos();
            }
        });

        $("#ft_list").prepend(todo);
    }

    function saveTodos() {
        const todos = [];

        $("#ft_list .todo").each(function () {
            todos.push($(this).text());
        });

        document.cookie =
            "todoList=" +
            encodeURIComponent(JSON.stringify(todos)) +
            "; max-age=31536000; path=/";
    }

    function getCookie(name) {
        const cookies = document.cookie.split(";");

        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();

            if (cookie.startsWith(name + "=")) {
                return cookie.substring(name.length + 1);
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

    $("#newButton").on("click", function () {
        const text = prompt("Enter a new TO DO:");

        if (text === null || text.trim() === "") {
            return;
        }

        createTodo(text.trim());
        saveTodos();
    });

    loadTodos();
});
