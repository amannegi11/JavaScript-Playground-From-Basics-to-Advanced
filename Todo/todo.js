const todos = [];
displayTodos();
const btn = document.querySelector(".btn");

const addTodo = () => {
    let input = document.querySelector(".text");
    let date=document.querySelector(".date");
    
    if(input.value){ 
    todos.push({text:input.value,date:date.value });
    input.value = "";
    date.value="";
    displayTodos();}
}

function displayTodos() {
    let list = document.querySelector("ul");
    let html = "";
    for (let i = 0; i < todos.length; i++) {
        html += `<li>
            <span>${todos[i].text}
            </span>
            <span>${todos[i].date}</span>
            <button onclick="deleteTodo(${i})">Delete</button>
        </li>`
    }
    list.innerHTML = html;}


function deleteTodo(index) {
    todos.splice(index, 1)
    displayTodos();
}







btn.addEventListener("click", addTodo)