document.addEventListener("DOMContentLoaded", () => {
  addingEventListener()
  });


function addingEventListener() {
  document.getElementById("create-task-form").addEventListener("submit", handleSumbit )
 
}

function handleSumbit(e){
  e.preventDefault();
  const task = document.getElementById("new-task-description").value
  displayTAsk(task)
}

function displayTAsk(task){

  const taskUl = document.getElementById('tasks');

  const taskLi = document.createElement('li');
  
  taskLi.textContent = task;
  taskUl.appendChild(taskLi)
}