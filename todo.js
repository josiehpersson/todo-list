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
    if (localStorage.todoItems === '' || localStorage.todoItems === undefined) return;
    todoItems = localStorage.helaListan;
    UlListan.innerHTML += todoItems;
}
visaTodo();


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