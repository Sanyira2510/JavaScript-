function mostrarMayor() {
    let valor1= document.getElementById("num1").value;
    let valor2= document.getElementById("num2").value;
    let n1= parseInt(valor1);
    let n2= parseInt(valor2);
    
    if (isNaN(n1) || isNaN(n2)) {
        alert("Por favor, ingrese números válidos.");
        return;
    }
    if (n1 > n2) {
        alert("El  número  mayor es: " + n1);
    } else if (n2 > n1) {
        alert("El  número  mayor es: " + n2);
    } else {
        alert("Ambos números son iguales (" + n1 + ").");
    }
}