/* const removeButton = document.getElementById('remove-text-button');
const todoInput = document.getElementById('todo-input');
const ultodoList = document.getElementById('todoList');
const litodoItem = document.getElementById('todoItem');
const submitButton = document.getElementById('submittodo');



removeTodos = () => {}

submitButton.addEventListener('click', function (){
    createTodos();
    }); //skapar en todo och visar en todo.
    
createTodos = () => {
    addTodo();
    displayTodo();
};

removeButton.addEventListener('click', function() {
    ultodoList.innerHTML = '';
    localStorage.clear();
}); //tömmer UL listan i localstorage.

addTodo = () => {
    if(todoInput.value === '' || todoInput.value === undefined) {
        return false;
    }
    localStorage.todoInput = todoInput.value;
    return true;
}; 
//lägger till en todo

displayTodo = () => {
    todoInput.value = '';
    let item = localStorage.todoInput;
    let listitem = '';
    listitem = `<li>${item}</li>`;
    ultodoList.innerHTML += listitem;
    localStorage.ultodoList = ultodoList.innerHTML;
}; 
//visar en todo, tar bort text i inputfältet.


getTodos = () => {
    ultodoList.innerHTML += localStorage.ultodoList;
}; 
//hämtar todos från localstorage.

getTodos(); */

const tabortAllaTodos = document.getElementById('remove-text-button');
const inputFältet = document.getElementById('todo-input');
const läggTillKnapp = document.getElementById ('submittodo');
const UlListan = document.getElementById('todoList');

let todoTillLista = '';
let listInnehåll = '';
let listPunkt = '';
let tabortKnapp = '';

läggTillKnapp.onclick = () => {
läsTodo();
skapaTodo();
inputFältet.value = '';
}

//läser in från input, lagrar i variabel
läsTodo = () => {

    
    let todo = inputFältet.value;
    if(inputFältet.value === '' || inputFältet.value === undefined) alert('tomt!');
    else {
    todoTillLista = document.createTextNode(todo);
    return todoTillLista;
    }
}

//skapar li och visar detta i ul
skapaTodo = () => {
    let todoitem = todoTillLista;
    if(todoitem === undefined || todoitem === '') alert('tomt!');
    listPunkt = document.createElement('li');
    listPunkt.setAttribute ('class', 'listpunkt');
    listPunkt.innerHTML = `<i class="fas fa-broom" id = "trash"></i>`;
    listPunkt.appendChild(todoitem);
    UlListan.appendChild(listPunkt);
    lagraTodo();
}
//lagrar UL i localStorage

lagraTodo = () => {
    localStorage.helaListan = UlListan.innerHTML;
}

let todoItems = '';

visaTodo = () => {
    todoItems = localStorage.helaListan;
    UlListan.innerHTML += todoItems;
}
visaTodo();

let trashKnapp = document.querySelectorAll('I');


document.querySelector('#todoList').addEventListener('click', function(e) {
       if (e.target.tagName === 'LI') {
        e.target.classList.toggle('strykaÖver');

       }
});

tabortAllaTodos.onclick = () => {
    localStorage.clear();
    let todoItems = '';
    UlListan.innerHTML = todoItems;
}
// visar undefined efter att jag skapat tabortallatodos klick-event....