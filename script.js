const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// add a task
function addTask(){
    if(inputBox.value === ''){
        alert("Gotta have something");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
}

// implement mouse click to mark items as finished or delete items
listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);

// allow for items to be added by pressing enter key

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML); 
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();