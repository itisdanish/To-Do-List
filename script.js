const form = document.querySelector("form");
const taskInput = document.getElementById("new-task");
const taskList = document.getElementById("task-list");

form.addEventListener("submit", addTask);

function addTask(e) {
  e.preventDefault();

  if (taskInput.value === "") {
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${taskInput.value}</span>
    <button class="delete-btn">Delete</button>
  `;

  li.querySelector("span").addEventListener("click", toggleTaskCompleted);
  li.querySelector(".delete-btn").addEventListener("click", deleteTask);

  taskList.appendChild(li);

  taskInput.value = "";
}

function toggleTaskCompleted(e) {
  e.target.classList.toggle("completed");
}

function deleteTask(e) {
  e.target.parentElement.remove();
}
