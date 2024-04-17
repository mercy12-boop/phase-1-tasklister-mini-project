document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form");
  form.addEventListener("submit", addTask);
});

function addTask(e) {
  e.preventDefault();
  const taskList = document.getElementById("tasks"); // grabbing the container containing the tasks
  const tasks = document.createElement("li"); // creating a way to display the tasks
  tasks.textContent = e.target.description.value;
  taskList.append(tasks);
  e.target.reset(); // clearing out the input
  // e.target.description.value = ""; Achieves the sale thing
  const button = document.createElement("button");
  button.textContent = "X";
  button.style.marginLeft = "10px";
  tasks.appendChild(button);
  button.addEventListener("click", deleteTasks);
}

function deleteTasks(e) {
  const task = e.target.parentNode;
  task.remove();
}
