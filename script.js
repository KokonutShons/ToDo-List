const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const iconn = document.getElementById("moon");
const body = document.body;    // set HTML element

let fadeAnimationEnabled = false;

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
inputBox.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addTask();
    }
});

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML); 
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

// when moon icon is clicked...
iconn.addEventListener("click", () => {
    fadeAnimationEnabled = !fadeAnimationEnabled;
    if (fadeAnimationEnabled) {
        body.classList.add("fade-cycle");
    }
    else {
        body.classList.remove("fade-cycle");
    }
})