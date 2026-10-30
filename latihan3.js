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