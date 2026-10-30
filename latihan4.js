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