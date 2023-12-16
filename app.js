class Task {
    constructor(text, completed = false) { 
        this.text = text;
        this.completed = completed;
    }
}

function renderTask (task) {
    const newTask = document.createElement("li");
    newTask.setAttribute('class', 'task');
    taskContainer.appendChild(newTask);

    const newCheckBox = document.createElement("input");
    newCheckBox.setAttribute('type', 'checkbox');
    newCheckBox.setAttribute('class', 'task-checkbox');
    newTask.appendChild(newCheckBox);
    newCheckBox.checked = task.completed;

    const newLabel = document.createElement("label");
    newLabel.setAttribute('class', 'task-text');
    newLabel.innerText = task.text;
    newLabel.style.textDecoration = task.completed ? "line-through" : "none"; // shortcut to typing out conditional statement (if checked value is on (true), then textDecoration should have a line-through, else the default is off (false) so the textDecoration should be none)
    newTask.appendChild(newLabel);

    const newDeleteBtn = document.createElement("button");
    newDeleteBtn.setAttribute('type', 'button');
    newDeleteBtn.setAttribute('class', 'task-delete');
    newDeleteBtn.innerText = "X";
    newTask.appendChild(newDeleteBtn);

    newCheckBox.addEventListener('click', () => { // this is a shortcut to function() {} with some changes - dependent on situation, cannot always be used 
        task.completed = newCheckBox.checked; // checks the checked value (on or off) and stores value in completed key
        newLabel.style.textDecoration = task.completed ? "line-through" : "none";
        saveSession();
    });

    newDeleteBtn.addEventListener('click', () => {
        taskContainer.removeChild(newTask);
        saveSession();
    });
}

function addNewTask() {
    if (text.value == "") {
        window.alert("Enter in a task!");
    } else {
        const newTask = new Task(text.value);
        renderTask(newTask);
        text.value = ""; // clear/reset text value from input
        saveSession();
    }
}

function saveSession() {
    const tasks = Array.from(taskContainer.children).map(taskElement => { // as of the final commit date, I don't fully understand these concepts (Array.from, .map)
        return new Task( // creates new Task object
            taskElement.querySelector('.task-text').innerText,
            taskElement.querySelector('.task-checkbox').checked
        );
    });

    localStorage.setItem("current-session", JSON.stringify(tasks));
}

function showSession() { 
    const storedTasks = JSON.parse(localStorage.getItem("current-session")) || []; // Retrieve the tasks array from local storage and parse it as JSON
    storedTasks.forEach(storedTask => renderTask(storedTask)); // for each task that was found in storage, perform the renderTask function to display it on screen
}

const text = document.getElementById("add-task-text");
const submitBtn = document.getElementById("add-task-button");
const taskContainer = document.getElementById("task-container");

text.addEventListener('change', addNewTask); // this allows users to press enter to add new task
submitBtn.addEventListener('click', addNewTask);

showSession();