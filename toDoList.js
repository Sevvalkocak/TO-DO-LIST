
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


// const tamamlaBtn = document.getElementById("tamamla");
// const silBtn = document.getElementById("sil");

// tamamlaBtn.addEventListener('click',tamamla);

// function tamamla(){
//     const doneList = document.querySelector(".doneList");
//     const tamamlanan = document.createElement("div");
//     tamamlanan.classList.add('todo-item completed');
//     tamamlanan.innerHTML = input.value;
//     input.value = "";

//     doneList.appendChild(tamamlanan);
// }


// const addButon = document.getElementById("addBtn");

// addButon.addEventListener("click", function () {
//   const input = document.getElementById("toDo");
//   const toDoText = input.value;

//   if (!todoText) return;

//   toDo.push({
//     text: toDoText,
//     isCompleted: false,
//   });

//   renderTodos();
// });















// function renderTodos() {
//     const taskList = document.getElementById("taskList");
//     const doneList = document.getElementById("doneList");
//     const notCompletedTask = todo.filter(({ isCompleted }) => !isCompleted);
//     const completedTask = todo.filter(({ isCompleted }) => isCompleted);


// const toDo =  [
//     {
//         text: "Muratı çok sevmek",
//         isCompleted: false,
//     }
//     {
//         text: "Ok atmak",
//         isCompleted: false,
//     }
//     {
//         text: "Yürüyüş yapmak",
//         isCompleted: true,
//     }
// ];

// rendertoDo();



// const myToDoList = document.getElementById("toDoList"); 

// const i;
// for (i = 0; i < addButton.lenght; i++) {
//     const button = document.createElement("addBtn");
//     const text = document.createTextNode ("ToDo");

//     button.appendChild(text);
//     myToDoList[i].appendChild(button);

// }

// console.log (myToDoList);



// const addButon = document.getElementById("addBtn");

// addButon.addEventListener("click", function () {
//   const input = document.getElementById("toDo");
//   const toDoText = input.value;

//   if (!todoText) return;

//   toDo.push({
//     text: toDoText,
//     isCompleted: false,
//   });

//   renderTodos();
// });

// taskList.innerHTML;

//   toDo.forEach(({text, isCompleted},
//     index) => {
//         if (!isCompleted) {
//             taskList.innerHTML +=;
//         }
//     }
// );



