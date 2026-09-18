function validarClave() {
    let claveInput = document.getElementById("clave");
    let clave = claveInput.value;
    if (clave.length < 7 || clave.length > 20) {
        alert("La clave debe tener entre 7 y 20 caracteres.");
    }
}