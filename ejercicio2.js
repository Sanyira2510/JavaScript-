function calcularCubo() {
let inputNumero= document.getElementById("numero");
let numero = parseFloat(inputNumero.value);
let cubo = Math.pow(numero, 3);
alert("El cubo de " + numero + " es: " + cubo);
}