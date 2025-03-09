const taskList = document.querySelector(".taskList");
const doneList = document.querySelector(".doneList");
const addButton = document.getElementById("addBtn");
const input = document.getElementById("input");


document.addEventListener("DOMContentLoaded", loadTasks);
addButton.addEventListener("click", addTask);

function addTask() {
    const taskText = input.value.trim();
    if (taskText === "") return;

    const task = { text: taskText, completed: false };
    saveTask(task);
    renderTask(task);
    input.value = "";
}


function renderTask(task) {
    const taskItem = document.createElement("div");
    taskItem.classList.add("todo-item");

    const taskText = document.createElement("div");
    taskText.textContent = task.text;
    taskItem.appendChild(taskText);

    const actionContainer = document.createElement("div");
    actionContainer.classList.add("check-delete");
    taskItem.appendChild(actionContainer);

    if (!task.completed) {
        const checkBtn = document.createElement("button");
        const checkImg = document.createElement("img");
        checkImg.src = "image/Check.svg";
        checkBtn.appendChild(checkImg);
        actionContainer.appendChild(checkBtn);

        const deleteBtn = document.createElement("button");
        const deleteImg = document.createElement("img");
        deleteImg.src = "image/TrashSimple.svg";
        deleteBtn.appendChild(deleteImg);
        actionContainer.appendChild(deleteBtn);

        checkBtn.addEventListener("click", () => completeTask(task.text));
        deleteBtn.addEventListener("click", () => {
            removeTask(task.text);
            taskItem.remove();
        });

        taskList.appendChild(taskItem);
    } else {
        taskItem.classList.add("completed");
        doneList.appendChild(taskItem);
    }
}

function completeTask(taskText) {
    removeTask(taskText);
    saveTask({ text: taskText, completed: true });

    document.querySelectorAll(".todo-item").forEach(item => {
        if (item.textContent.includes(taskText)) {
            item.remove();
        }
    });

    renderTask({ text: taskText, completed: true });
}

function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


function removeTask(taskText) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(task => task.text !== taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => renderTask(task));
}
