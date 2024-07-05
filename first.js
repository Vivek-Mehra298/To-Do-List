const inputBox = document.querySelector("#input-box");
const addBtn = document.querySelector("#add-btn");
const todoList = document.querySelector("#todoList");

let editTodo = null;

//function to add to-do
const addTodo = () => {
  // alert("hello");
  const inputText = inputBox.value.trim();
  if (inputText.length <= 0) {
    alert("You must right something in your to do");
  } 
    else if(addBtn.value === "Edit") {
      editTodo.target.previousElementSibling.innerHTML = inputText;
    //   editLocalTodos(inputText);
      addBtn.value = "Add";
      inputBox.value = "";
    } else {
      //creating p tag
      const li = document.createElement("li");
      const p = document.createElement("p");
      // p.style.marginLeft="5px";
      p.innerHTML = inputText;
      li.appendChild(p);

      //creating edit btn
      const editBtn = document.createElement("button");
      editBtn.classList.add("btn", "editBtn");
      editBtn.innerText = "Edit";
      li.appendChild(editBtn);

      //creating delete btn
      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("btn", "deleteBtn");
      deleteBtn.innerText = "Remove";
      li.appendChild(deleteBtn);

      todoList.appendChild(li);
      inputBox.value = "";

      saveLocalTodos(inputText); //new line
    }
  };

//function to update(edit/delete) to do
const updateTodo = (e) => {
  console.log(e.target.innerHTML);
  if (e.target.innerHTML === "Remove") {
    todoList.removeChild(e.target.parentElement);
    deleteLocalTodos(e.target.parentElement);
  } 

  else if (e.target.innerHTML === "Edit") {
    inputBox.value = e.target.previousElementSibling.innerHTML;
    inputBox.focus();
    addBtn.value = "Edit";
    editTodo = e;
  }
};

//local storage read it from MDN

//Add to todo task in Local storage
const saveLocalTodos = (todo) => {
  let todos = []; //empty array
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
  //console.log(todos);
};

//if we refresh page than even the todos show or get the local todos
const getLocalTodos = () => {
  let todos = []; //empty array
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
    todos.forEach((todo) => {
      //creating p tag
      const li = document.createElement("li");
      const p = document.createElement("p");
      // p.style.marginLeft="5px";
      p.innerHTML = todo;
      li.appendChild(p);

      //creating edit btn
      const editBtn = document.createElement("button");
      editBtn.classList.add("btn", "editBtn");
      editBtn.innerText = "Edit";
      li.appendChild(editBtn);

      //creating delete btn
      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("btn", "deleteBtn");
      deleteBtn.innerText = "Remove";
      li.appendChild(deleteBtn);

      todoList.appendChild(li);
    });
  }
};

//for delete Local Todos
const deleteLocalTodos=(todo)=>{
    let todos; //empty array
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }

    let todoText=todo.children[0].innerHTML;
    //console.log(todoText.children[0].innerHTML);
    let todoIndex=todos.indexOf(todoText);
    //console.log(todoIndex);
    //array-splice function
    todos.splice(todoIndex,1);
    localStorage.setItem("todos",JSON.stringify(todos));
}

//for edit Local Todos
// const editLocalTodos=(todo)=>{
//    let todos=JSON.parse(localStorage.getItem("todos"));
//    let todoIndex=todos.indexOf(todo);
//    todos[todoIndex]=inputBox.value;
//    localStorage.setItem("todos",stringify(todos));
// }

document.addEventListener('DOMContentLoaded',getLocalTodos);
addBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", updateTodo);
