const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");


todoButton.addEventListener("click", addList);
todoList.addEventListener("click", deleteCheck);

function addList(event){
    event.preventDefault();

    //Create div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //Create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    if(todoInput.value === ""){
        alert("Please provide a valid input");
    }
    else{
    //create check mark button
    const checkButton = document.createElement("button");
    checkButton.innerHTML = '<i class="fas fa-check"></i>';
    checkButton.classList.add("check-btn");
    todoDiv.appendChild(checkButton);
    
    
    //create delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add("delete-btn");
    todoDiv.appendChild(deleteButton);

    //append to list
    todoList.appendChild(todoDiv);

    //clear input box after entering
    todoInput.value="";
    }
}

function deleteCheck(event){
    const item = event.target;

    if(item.classList[0] === "delete-btn"){
        const todo = item.parentElement;
        todo.remove();
    }

    if(item.classList[0] === "check-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

}