const newButton = document.getElementById("newButton");
const todoList = document.getElementById("ft_list");


/* กดปุ่ม New */
newButton.addEventListener("click", function () {
    const todoText = prompt("Enter a new TO DO:");

    /* ถ้ากด Cancel หรือไม่ได้กรอกข้อความ */
    if (todoText === null || todoText.trim() === "") {
        return;
    }

    createTodo(todoText.trim());
    saveTodos();
});


/* สร้าง TO DO แล้วใส่ไว้บนสุด */
function createTodo(text) {
    const todo = document.createElement("div");

    todo.className = "todo";
    todo.textContent = text;

    /* เมื่อคลิก TO DO ให้ถามก่อนลบ */
    todo.addEventListener("click", function () {
        const answer = confirm("Do you want to remove this TO DO?");

        if (answer === true) {
            todo.remove();
            saveTodos();
        }
    });

    todoList.prepend(todo);
}


/* บันทึกรายการทั้งหมดลง Cookie */
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


/* อ่าน Cookie ตามชื่อ */
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


/* โหลดรายการเดิมจาก Cookie */
function loadTodos() {
    const savedCookie = getCookie("todoList");

    if (savedCookie === null) {
        return;
    }

    const todos = JSON.parse(decodeURIComponent(savedCookie));

    /*
        Cookie เก็บรายการจากบนลงล่างอยู่แล้ว
        จึงสร้างย้อนจากรายการสุดท้าย
        เพราะ createTodo() ใช้ prepend()
    */
    for (let i = todos.length - 1; i >= 0; i--) {
        createTodo(todos[i]);
    }
}


/* โหลดรายการทันทีเมื่อเปิดหน้าเว็บ */
loadTodos();