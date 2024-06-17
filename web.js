document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();
    addTask();
});

function addTask() {
    const taskName = document.getElementById('task-name').value;
    const taskPriority = document.getElementById('task-priority').value;
    const taskCategory = document.getElementById('task-category').value;
    const taskDueDate = document.getElementById('task-due-date').value;

    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');
    taskItem.className = 'task';
    taskItem.innerHTML = `
        <span>${taskName}</span>
        <span>${taskPriority}</span>
        <span>${taskCategory}</span>
        <span>${taskDueDate}</span>
        <button onclick="completeTask(this)">Complete</button>
        <button onclick="deleteTask(this)">Delete</button>
    `;
    taskList.appendChild(taskItem);

    document.getElementById('task-form').reset();
}

function completeTask(button) {
    const taskItem = button.parentElement;
    taskItem.classList.toggle('completed');
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}
