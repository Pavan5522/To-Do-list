function addTask() {

    let taskInput = document.getElementById("taskInput");

    let task = taskInput.value;

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = task;

    span.onclick = function () {
        span.style.textDecoration = "line-through";
    };

    let deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";

    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}