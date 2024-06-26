import { v4 as uuidV4 } from "uuid"
type Task = {
  id: string
  title: string
  completed: boolean
  createdAt: Date
}

const list = document.querySelector<HTMLUListElement>("#list")
const form = document.getElementById("new-task-form") as HTMLFormElement | null
const input = document.querySelector<HTMLInputElement>("#new-task-title")
const tasks: Task[] = loadTasks()
tasks.forEach(addListItem)

form?.addEventListener("submit", e => {
  e.preventDefault()

  if (input?.value == "" || input?.value == null) return

  const newTask: Task = {
    id: uuidV4(),
    title: input.value,
    completed: false,
    createdAt: new Date(),
  }
  tasks.push(newTask)
  saveTasks()

  addListItem(newTask)
  input.value = ""
})

function addListItem(task: Task) {
   const item = document.createElement("li")
   const div = document.createElement("div")
   const label = document.createElement("label")
   const checkbox = document.createElement("input")
   const NewList = document.getElementById("newList")
  checkbox.addEventListener("change", () => {
    task.completed = checkbox.checked
    saveTasks()
  })

  checkbox.type = "checkbox"
  checkbox.checked = task.completed
  label.append(checkbox, task.title)
  item.append(label)
  div.append(item)
  list?.append(div)
}

function saveTasks() {
  localStorage.setItem("TASKS", JSON.stringify(tasks))
}

function loadTasks(): Task[] {
  const taskJSON = localStorage.getItem("TASKS")
  if (taskJSON == null) return []
  return JSON.parse(taskJSON)
}


function myFunction() {
  console.log("Button 'butOne' clicked!");
  const nped = document.getElementById('new-task-form');
  const firstSec = document.getElementById('firstPage');
  const newList = document.getElementById('list');
  nped.style.display = 'block';
  firstSec.style.display='none';
  newList.style.display = 'block';
  // Perform your desired actions here
}

const button = document.getElementById("tests"); // Assuming the button has this ID

if (button) {
  button.addEventListener("click", myFunction);
} else {
  console.error("Button with ID 'butOne' not found.");
}
