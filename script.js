let nama = "john Doe";
let umur = 25;
let statusMenikah = false;

console.log("Nama: " + nama);
console.log("umur: " + umur);
console.log("Status Menikah: " + statusMenikah);

function hitungLuas(panjang, lebar) {
 return panjang * lebar;
}
let luas1 = hitungLuas(5, 8);
console.log("Luas persegi panjang dengan panjang 5 dan lebar 8 adalah: " + luas1);
let luas2 = hitungLuas(10, 3);
console.log("Luas persegi panjang dengan panjang 10 dan lebar 3 adalah: " +
luas2);

let btnBackground = document.createElement("button");
btnBackground.textContent = "Ubah Latar Belakang";
btnBackground.onclick = function() {
 document.body.style.backgroundColor = "#e8f4fc";
};

let btnTextColor = document.createElement("button");
btnTextColor.textContent = "Ubah Warna Teks";
btnTextColor.onclick = function() {
 document.body.style.color = "#2c3e50";
};

let btnIncreaseFont = document.createElement("button");
btnIncreaseFont.textContent = "Perbesar Font";
btnIncreaseFont.onclick = function() {
 let currentSize = parseInt(getComputedStyle(document.body).fontSize);
 document.body.style.fontSize = (currentSize + 1) + "px";
};

let output3Div = document.getElementById("output3");
output3Div.appendChild(btnBackground);
output3Div.appendChild(btnTextColor);
output3Div.appendChild(btnIncreaseFont);

let form = document.createElement("form");

let labelNama = document.createElement("label");
labelNama.textContent = "Nama: ";
let inputNama = document.createElement("input");
inputNama.type = "text";
inputNama.id = "nama";

let labelEmail = document.createElement("label");
labelEmail.textContent = "Email: ";
let inputEmail = document.createElement("input");
inputEmail.type = "email";
inputEmail.id = "email";

let btnSubmit = document.createElement("button");
btnSubmit.type = "button";
btnSubmit.textContent = "Submit";

let errorDiv = document.createElement("div");
errorDiv.id = "error-message";
errorDiv.style.color = "red";

btnSubmit.onclick = function() {
 let nama = inputNama.value;
 let email = inputEmail.value;
 let errorMessage = "";

 if (nama === "") {
 errorMessage += "Nama tidak boleh kosong. ";
 }

 if (email.indexOf("@") === -1) {
 errorMessage += "Email harus mengandung @. ";
 }

 if (errorMessage !== "") {
 errorDiv.textContent = errorMessage;
 } else {
 errorDiv.textContent = "Form valid! Data berhasil dikirim.";
 errorDiv.style.color = "green";
 }
};

form.appendChild(labelNama);
form.appendChild(inputNama);
form.appendChild(document.createElement("br"));
form.appendChild(labelEmail);
form.appendChild(inputEmail);
form.appendChild(document.createElement("br"));
form.appendChild(btnSubmit);
form.appendChild(errorDiv);

let output4Div = document.getElementById("output4");
output4Div.appendChild(form);

let inputTask = document.createElement("input");
inputTask.type = "text";
inputTask.placeholder = "Masukkan tugas baru...";
inputTask.id = "task-input";

let btnAdd = document.createElement("button");
btnAdd.textContent = "Tambah";
btnAdd.id = "add-task";

let taskList = document.createElement("ul");
taskList.id = "task-list";

btnAdd.onclick = function() {
 let taskText = inputTask.value.trim();
 if (taskText !== "") {
 addTask(taskText);
 inputTask.value = "";
 saveTasks();
 }
};

function addTask(taskText) {
 let li = document.createElement("li");

 let checkbox = document.createElement("input");
 checkbox.type = "checkbox";
 checkbox.addEventListener("change", function() {
 if (this.checked) {
 taskSpan.style.textDecoration = "line-through";
 } else {
 taskSpan.style.textDecoration = "none";
 }
 saveTasks();
 });

 let taskSpan = document.createElement("span");
 taskSpan.textContent = taskText;

 let deleteBtn = document.createElement("button");
 deleteBtn.textContent = "Hapus";
 deleteBtn.addEventListener("click", function() {
 li.remove();
 saveTasks();
 });

li.appendChild(checkbox);
 li.appendChild(taskSpan);
li.appendChild(deleteBtn);
 taskList.appendChild(li);
}

function saveTasks() {
 let tasks = [];
 document.querySelectorAll("#task-list li").forEach(function(li) {
 let taskText = li.querySelector("span").textContent;
 let isCompleted = li.querySelector("input[type='checkbox']").checked;
 tasks.push({ text: taskText, completed: isCompleted });
 });
 localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
 let savedTasks = localStorage.getItem("tasks");
 if (savedTasks) {
 let tasks = JSON.parse(savedTasks);
 tasks.forEach(function(task) {
 addTask(task.text);
 let lastAdded = taskList.lastChild;
 let checkbox = lastAdded.querySelector("input[type='checkbox']");
 checkbox.checked = task.completed;
 if (task.completed) {
 lastAdded.querySelector("span").style.textDecoration =
"line-through";
 }
 });
 }
}

let output5Div = document.getElementById("output5");
output5Div.appendChild(inputTask);
output5Div.appendChild(btnAdd);
output5Div.appendChild(taskList);

loadTasks();

document.getElementById("hasil").innerHTML =
    `<p>Luas persegi panjang dengan panjang 5 dan lebar 8 adalah: ${luas1}</p>
    <p>Luas persegi panjang dengan panjang 10 dan lebar 3 adalah: ${luas2}</p>`;