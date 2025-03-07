
const toDoList = document.querySelector(".toDoList");
const toDoİnput = document.querySelector(".toDoİnput");
const taskList = document.querySelector(".taskList");
const doneList = document.querySelector(".doneList"); 



const button = document.getElementById("addBtn");
button.addEventListener('click', ekle);

function ekle(){
    const input = document.getElementById("input");

    if (input.value.trim() === "") {
        return;
    };

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

    input.value = '';

    checkBtn.addEventListener('click', function() {
        moveToDoneList(madde);
    });

    deleteBtn.addEventListener('click', function(){
        madde.remove();
    });

}

function moveToDoneList(taskItem) {
    doneList.appendChild(taskItem);
    taskItem.classList.add("completed");  
    const checkBtn = taskItem.querySelector("button");
    checkBtn.remove();
    const deleteBtn = taskItem.querySelector("button");
    deleteBtn.remove();
};


function addEventListenersToExistingTasks() {
    const existingTasks = document.querySelectorAll('.todo-item');

    existingTasks.forEach(task => {
        const checkBtn = task.querySelector(".check-delete button:nth-child(1)");
        const deleteBtn = task.querySelector(".check-delete button:nth-child(2)");

        checkBtn.addEventListener('click', function () {
            moveToDoneList(task);
        });

        deleteBtn.addEventListener('click', function () {
            task.remove();
        });
    });
}

window.addEventListener('DOMContentLoaded', addEventListenersToExistingTasks);