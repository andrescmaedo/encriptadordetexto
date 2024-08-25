function encriptar() {
    let texto = document.getElementById("inputText").value;

    // Reemplazos según las llaves de encriptación
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("outputMessage").innerText = textoEncriptado ? textoEncriptado : "Ningún mensaje fue encontrado";
}

function desencriptar() {
    let texto = document.getElementById("inputText").value;

    // Reemplazos inversos para desencriptar
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("outputMessage").innerText = textoDesencriptado ? textoDesencriptado : "Ningún mensaje fue encontrado";
}

function copiarTexto() {
    let texto = document.getElementById("outputMessage").innerText;
    navigator.clipboard.writeText(texto).then(() => {
        alert("Texto copiado al portapapeles");
    });
}
