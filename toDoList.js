
const toDoList = document.querySelector(".toDoList");
const toDoİnput = document.querySelector(".toDoİnput");
const taskList = document.querySelector(".taskList");
const toDo = document.querySelector(".todo-item");
const done = document.querySelector(".todo-item completed");





const button = document.getElementById("addBtn");
button.addEventListener('click', ekle);

function ekle(){
    const input = document.getElementById("input");

    const madde = document.createElement("div");
    madde.classList.add('todo-item');
    
    const textdiv =document.createElement('div');
    textdiv.innerHTML = input.value;
    madde.appendChild(textdiv);

    const checkDelete = document.createElement("div");
    checkDelete.classList.add("check-delete");
    madde.appendChild(checkDelete);

    const checkBtn = document.createElement("button");
    checkDelete.appendChild(checkBtn);

    const checkImg = document.createElement("img");
    checkImg.src = "image/Check.svg";
    checkBtn.appendChild(checkImg);

    const deleteBtn = document.createElement("button");
    checkDelete.appendChild(deleteBtn);

    const deleteImg = document.createElement("img");
    deleteImg.src = "image/TrashSimple.svg";
    deleteBtn.appendChild(deleteImg);

    taskList.appendChild(madde);
}













