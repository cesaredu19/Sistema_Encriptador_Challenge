// Función para encriptar el texto
function Encriptar() {
    let inputText = document.getElementById("inputText").value;
    let encryptedText = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    let outputDiv = document.getElementById("output");
    if (encryptedText) {
        outputDiv.innerText = encryptedText;
        outputDiv.classList.add('has-message');
        outputDiv.classList.remove('no-message');
    } else {
        outputDiv.innerText = '';
        outputDiv.classList.add('no-message');
        outputDiv.classList.remove('has-message');
    }
}

// Función para desencriptar el texto
function Desencriptar() {
    let inputText = document.getElementById("inputText").value;
    let decryptedText = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    let outputDiv = document.getElementById("output");
    if (decryptedText) {
        outputDiv.innerText = decryptedText;
        outputDiv.classList.add('has-message');
        outputDiv.classList.remove('no-message');
    } else {
        outputDiv.innerText = '';
        outputDiv.classList.add('no-message');
        outputDiv.classList.remove('has-message');
    }
}

// Función para copiar el texto al portapapeles
function Copy_portapapeles() {
    let outputText = document.getElementById("output").innerText;
    if (outputText) {
        navigator.clipboard.writeText(outputText)
            .then(() => {
                alert('Texto copiado en el portapapeles');
            })
            .catch(err => {
                console.error('Error al copiar el texto: ', err);
            });
    } else {
        alert('No hay texto para copiar.');
    }
}
