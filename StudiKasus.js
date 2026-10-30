function hitung(operator) {
    let val1 = parseFloat(document.getElementById("angka1").value);
    let val2 = parseFloat(document.getElementById("angka2").value);
    let hasilElement = document.getElementById("hasil");

    if (isNaN(val1) || isNaN(val2)) {
        hasilElement.textContent = "Harap masukkan kedua angka!";
        return;
    }

    let hasil = 0;
    switch (operator) {
        case '+':
            hasil = val1 + val2;
            break;
        case '-':
            hasil = val1 - val2;
            break;
        case '*':
            hasil = val1 * val2;
            break;
        case '/':
            if (val2 === 0) {
                hasilElement.textContent = "Tidak dapat dibagi dengan 0!";
                return;
            }
            hasil = val1 / val2;
            break;
    }

    hasilElement.textContent = hasil;
}