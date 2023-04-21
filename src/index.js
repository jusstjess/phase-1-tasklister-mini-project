document.addEventListener("DOMContentLoaded", () => {
  addingEventListener()
  });


function addingEventListener() {
  document.getElementById("create-task-form").addEventListener("submit", handleSumbit )
 
}

function handleSumbit(e){
  e.preventDefault();
  const task = document.getElementById("new-task-description").value
  const priorityLevel = parseInt(e.target.priority.value)
  displayTAsk(task,priorityLevel)
  
}

function displayTAsk(task,priorityLevel){

  const taskUl = document.getElementById('tasks');
  const taskLi = document.createElement('li');
  const deleteBtn = document.createElement('button')

  deleteBtn.textContent = " x"
  deleteBtn.addEventListener("click", deletingTasks)
  
  
  taskLi.textContent = task;
  taskLi.style.color = getPriorityColor(priorityLevel)
  taskUl.appendChild(taskLi)
  taskLi.appendChild(deleteBtn)

}

function deletingTasks(e){
  console.log(e)
  e.target.parentNode.remove()

}
function getPriorityColor(priorityLevel){
  if (priorityLevel === 1){
    return "red"
  }
  else if (priorityLevel === 2){
    return "orange"
  }
  else {
    return "yellow"
  }
}



