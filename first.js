const inputBox=document.querySelector("#input-box");
const addBtn=document.querySelector("#add-btn");
const todoList=document.querySelector("#todoList");

let editTodo=null;

//function to add to-do
const addTodo=()=>{
    // alert("hello");
    const inputText=inputBox.value.trim();
    if(inputText.length<=0){
        alert("You must right something in your to do");
    }
    else{

        if(addBtn.value==="Edit")
        {
            editTodo.target.previousElementSibling.innerHTML=inputText;
            addBtn.value="Add";
            inputBox.value="";
        }
   else{
    //creating p tag
    const li=document.createElement("li");
    const p=document.createElement("p");
    // p.style.marginLeft="5px";
    p.innerHTML=inputText;
    li.appendChild(p);
    
    //creating edit btn
    const editBtn=document.createElement("button");
    editBtn.classList.add("btn","editBtn");
    editBtn.innerText="Edit";
    li.appendChild(editBtn);

    //creating delete btn
    const deleteBtn=document.createElement("button");
    deleteBtn.classList.add("btn","deleteBtn");
    deleteBtn.innerText="Remove";
    li.appendChild(deleteBtn);


    todoList.appendChild(li);
    inputBox.value="";}
   }
}

//function to update(edit/delete) to do
const updateTodo=(e)=>{
   console.log(e.target.innerHTML);
   if(e.target.innerHTML==="Remove")
   {
      todoList.removeChild(e.target.parentElement);
   }
   else if(e.target.innerHTML==="Edit")
   {
    inputBox.value=e.target.previousElementSibling.innerHTML;
    inputBox.focus();
    addBtn.value="Edit";
    editTodo=e;
   }
}
addBtn.addEventListener("click",addTodo);
todoList.addEventListener("click",updateTodo);