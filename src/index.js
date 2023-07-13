document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  const newTask = document.getElementById("create-task-form");
  const taskDescription = document.getElementById("new-task-description")
  const newUlTask = document.getElementById("tasks");
  newTask.addEventListener('submit', (e) => {
    e.preventDefault();
    taskDescription.value
    const newList = document.createElement('li')
    newList.textContent = taskDescription.value 
    newUlTask.append(newList)
  })  

  

});


