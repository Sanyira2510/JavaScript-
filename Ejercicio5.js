function validarClaves (){
let pass1= document.getElementById ("clave1").value;
let pass2= document.getElementById ("clave2").value;

if (pass1=== ""|| pass2=== "" ){
 alert ("Por favor, complete ambos campos.");
} else if (pass1==pass2){

    alert("Las contraseñas son iguales.");
} else {
    alert("Las contraseñas no son iguales.");
}
}
