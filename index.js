document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value;
        if (taskText.trim() !== "") {
            const li = document.createElement("li");
            li.innerHTML = `
                <span class="task">${taskText}</span>
                <button class="delete-button">Delete</button>
            `;
            taskList.appendChild(li);

            const deleteButton = li.querySelector(".delete-button");
            deleteButton.addEventListener("click", function () {
                taskList.removeChild(li);
            });

            taskInput.value = "";
        }
    });
});
