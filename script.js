// Étape 2
const input = document.getElementById("task-input");
const button = document.getElementById("add-task");
const list = document.getElementById("task-list");

//Étape 3
button.addEventListener("click", function () {
    // Code à exécuter quand on clique sur le bouton

    const taskText = input.value;

    if (taskText.trim() === "") {
        return; // ne fait rien si le champ est vide
      }

    const newTask = document.createElement("li");
    newTask.textContent = taskText;
    list.appendChild(newTask);
    input.value = "";

    // Étape 5
    newTask.addEventListener('click', function() {
        this.remove();
    });
  });