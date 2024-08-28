const textarea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

//'La letra "e" es convertida para "enter"
//'La letra "i" es convertida para "imes"
//'La letra "a" es convertida para "ai"
//'La letra "o" es convertida para "ober"
//'La letra "u" es convertida para "ufat"

function btnEncriptar() {
    const textoEncriptado = encriptar(textarea.value);
    mensaje.value = textoEncriptado
    textarea.value = "";
    mensaje.style.backgroundImage = "none"
    
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textarea.value);
    mensaje.value = textoDesencriptado
    textarea.value = "";
    

}



function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function copiar() {
    // Selecciona el contenido del elemento que quieres copiar
    let textoCopiar = document.querySelector(".mensaje").value;

    // Copia el texto al portapapeles
    navigator.clipboard.writeText(textoCopiar)
        .then(() => {
            console.log("Texto copiado: " + textoCopiar);
        })
        .catch(err => {
            console.error("Error al copiar el texto: ", err);
        });
}

// Asignar el evento 'click' al botón de copiar
document.querySelector(".btn-copiar").addEventListener("click", copiar);



