document.addEventListener("DOMContentLoaded", () => {
  addingEventListener()
  });

  taskObjArr = [];

function addingEventListener() {
  document.getElementById("create-task-form").addEventListener("submit", handleSumbit )
  document.getElementById("sort-tasks").addEventListener("change",sortTasks)
}



function handleSumbit(e){
  e.preventDefault();
  const task = document.getElementById("new-task-description").value
  const priorityLevel = parseInt(e.target.priority.value)

  const taskObject = {task, priorityLevel}
  taskObjArr.push(taskObject);

  displayTAsks(task,priorityLevel)
}

function displayTAsks(task,priorityLevel){

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
function sortTasks(){
  const sortTasksSelect = document.getElementById("sort-tasks")
  if (sortTasksSelect.value === "h-l"){
    taskObjArr.sort((a,b) => a.priorityLevel - b.priorityLevel)
  } else {
    taskObjArr.sort((a,b) => b.priorityLevel - a.priorityLevel)
  }
  console.log(taskObjArr)
  displayTAsks()

}



