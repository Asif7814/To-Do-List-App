// will have to restruture parts of this file so that I am able to access the createElement variables properly

const text = document.getElementById("add-task-text");
const submitBtn = document.getElementById("add-task-button");
const taskContainer = document.getElementById("task-container");

function addNewTask() {
    if (text.value == "") {
        window.alert("Enter in a task!");
    } else { 
        const newTask = document.createElement("li");
        newTask.setAttribute('class', 'task');
        taskContainer.appendChild(newTask);

        const newCheckBox = document.createElement("input");
        newCheckBox.setAttribute('type', 'checkbox');
        newCheckBox.setAttribute('class', 'task-checkbox');
        newCheckBox.setAttribute('id', `task-checkbox${1}`);
        newTask.appendChild(newCheckBox);
        
        const newLabel = document.createElement("label");
        newLabel.setAttribute('for', `task-checkbox${1}`);
        newLabel.setAttribute('class', 'task-text');
        newLabel.innerText = text.value;
        newLabel.style.textDecoration = "none";
        newTask.appendChild(newLabel);

        const newDeleteBtn = document.createElement("button");
        newDeleteBtn.setAttribute('type', 'button');
        newDeleteBtn.setAttribute('class', 'task-delete');
        newDeleteBtn.innerText = "X";
        newTask.appendChild(newDeleteBtn);

        text.value = ""; // clear text value from input

        saveSession();

        newCheckBox.addEventListener('click', () => { // this is a shortcut to function() {} with some changes - dependent on situation, cannot always be used 
            newLabel.style.textDecoration = "line-through";
            saveSession();
        });

        newLabel.style.textDecoration = "none";

        newDeleteBtn.addEventListener('click', () => {
            taskContainer.removeChild(newTask);
            saveSession();
        });
    }
}

function saveSession() { 
    localStorage.setItem("current-session", taskContainer.innerHTML);
}

function showSession() { 
    taskContainer.innerHTML = localStorage.getItem("current-session");
}

showSession(); // this shows the locally saved data but it currently cannot be accessed since I've structured the JS where i can only access data if i first call the addNewTask function

text.addEventListener('change', addNewTask); // this allows users to press enter to add new task
submitBtn.addEventListener('click', addNewTask);

// text.addEventListener('input', addNewTask); - accidental but can be used for live searching