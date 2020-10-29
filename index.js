// Selctors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Events Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", doneTrash);

//Functions

function addTodo(event) {
  event.preventDefault();
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  const doneBtn = document.createElement("button");
  doneBtn.innerHTML = '<i class="fas fa-check-double"></i>';
  doneBtn.classList.add("todo-done");
  todoDiv.appendChild(doneBtn);

  const trashBtn = document.createElement("button");
  trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
  trashBtn.classList.add("todo-trash");
  todoDiv.appendChild(trashBtn);

  todoList.appendChild(todoDiv);

  todoInput.value = "";
}

function doneTrash(event) {
  const item = event.target;

  //delete
  if (item.classList[0] === "todo-trash") {
    const todo = item.parentElement;
    todo.classList.add("sink");
    todo.addEventListener("transitionend", () => {
      todo.remove();
    });
  }

  //done
  if (item.classList[0] === "todo-done") {
    const todo = item.parentElement;
    todo.classList.toggle("done");
  }
}
