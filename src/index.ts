
  
  function hideMessage(){
    const hideMess = document.getElementById('message');
    hideMess.style.display='none';
  }


function myFunction() {
  console.log("Button 'butOne' clicked!");
  const nped = document.getElementById('insertToDo');
  const firstSec = document.getElementById('firstPage');

  nped.style.display = 'block';
  firstSec.style.display='none';
  hideMessage()
}
function homefunction() {
  console.log("Button 'butOne' clicked!");
  const nped = document.getElementById('insertToDo');
  const firstSec = document.getElementById('firstPage');
  const newList = document.getElementById('todoList');
  nped.style.display = 'none';
  firstSec.style.display='block';
  newList.style.display = 'none';
  hideMessage()
}
function MyListesD() {
  console.log("Button 'butOne' clicked!");
  const nped = document.getElementById('insertToDo');
  const firstSec = document.getElementById('firstPage');
  const newList = document.getElementById('todoList');
  nped.style.display = 'none';
  newList.style.display='block';
  firstSec.style.display = 'none';
  hideMessage()
}

const button = document.getElementById("tests"); 
const home = document.getElementById("Home"); 
const AllLists = document.getElementById('AllLists');

if (button) {
  button.addEventListener("click", myFunction);
} else {
  console.error("Button with ID 'butOne' not found.");
}

if (home) {
  home.addEventListener("click", homefunction);
} else {
  console.error("Button with ID 'myfun' not found.");
}
if (AllLists) {
  AllLists.addEventListener("click", MyListesD);
} else {
  console.error("Button with ID 'butOne' not found.");
}

document.addEventListener('DOMContentLoaded', function() {
  const todoForm = document.getElementById('todoForm');
  const todoInput = document.getElementById('todoInput');
  const todoList = document.getElementById('todoList');
  const Tdato = document.getElementById('date');
  const category = document.getElementById('category');
  const ProjectName = document.getElementById('name');


  function generateId() {
      return '_' + Math.random().toString(36).substr(2, 9);   // This is a function to generate unique ID
  }

  function addTask(task, dato, newCategory, myProjects) {
      const id = generateId();
      const todoItem = { id, task, dato, newCategory, myProjects, checked: false };
      const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
      storedTodos.push(todoItem);
      localStorage.setItem('todos', JSON.stringify(storedTodos));
      displayTodos();
      workDone()
  }

  function workDone(){
    console.log('Work is Done');
    const Newmessage = document.getElementById('message');
    Newmessage.style.display = 'block';
  }

  // Function to display all tasks from local storage
  function displayTodos() {
      const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
      todoList.innerHTML = '';
      storedTodos.forEach(todo => {
          const li = document.createElement('li');
          li.className = 'todoItem';
          li.dataset.id = todo.id;
          li.innerHTML = `<div id="test" > <span>${todo.newCategory}</span><h3>${todo.myProjects} </h3> 
              <p>${todo.dato}</p> </div>
              <div>
              <input type="checkbox" ${todo.checked ? 'checked' : ''}>
              <span onclick="deleteTask('${todo.id}')" class="material-symbols-outlined"> delete </span>
              </div>
          `;
          todoList.appendChild(li);
      });
  }


 
  // Function to delete task from local storage
  function deleteTask(id) {
      let storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
      storedTodos = storedTodos.filter(todo => todo.id !== id);
      localStorage.setItem('todos', JSON.stringify(storedTodos));
      displayTodos();
  }

  

  // Event listener for form submission
  todoForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const task = todoInput.value.trim();
      const datoTask = Tdato.value.trim();
      const categoryTask = category.value.trim();
      const nameOfProject =  ProjectName.value.trim();
      if (task) {
          addTask(task, datoTask, categoryTask, nameOfProject);
          todoInput.value = '';
      }
  });

  displayTodos();

  window.deleteTask = deleteTask;
});


function countLocalStorageItems(key) {
  // Get the value from localStorage
  const storedItems = localStorage.getItem(key);

  // Check if the key exists and the value is not null or empty
  if (storedItems !== null && storedItems.trim() !== "") {
    try {
      // Parse the stored value as JSON (assuming it's an array)
      const parsedItems = JSON.parse(storedItems);

      // If parsing is successful, return the length of the array
      return parsedItems.length;
    } catch (error) {
      console.error("Error parsing localStorage item:", error);
      // Handle parsing error (e.g., invalid JSON format)
      return 0; // Or return another appropriate value if parsing fails
    }
  } else {
    // Key doesn't exist or is empty, return 0
    return 0;
  }
}


const itemCount = countLocalStorageItems("todos");
console.log("Number of items in localStorage with key 'todos':", itemCount);



