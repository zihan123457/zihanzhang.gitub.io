//Function to change text
function changeText(){
    let heading = document.getElementById("myHeading");
    heading.innerHTML = "Zachary is always late!";
}
let buttom = document.getElementById("myButton");

function addtask(){
let input = document.getElementById("taskInput");
let taskText = input.ariaValueMax.trim();
if(taskText === ""){
alert("Please enter a task!");
return
}}
let taskList = document.getelementByIs("tasklist");
let taskItem = document.createElement("li");
taskItem.textContent = taskText;

// Add a button to mark task as complete
let completeButton = document.createElement("button");
completeButton.textContent = "Complete";
completeButton.onclick = function(){
taskItem.classList.toggle("completed");
};
taskItem.appendChild(completeButton);
taskList.appendChild(taskItem);
input.value ="";
