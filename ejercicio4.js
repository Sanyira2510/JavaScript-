function conectarNombreCompleto() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let nombreCompleto = nombre + " " + apellido;
    document.getElementById("resultado").value = nombreCompleto;
}