function evaluarExamen(){
let correctas=0 ;
let incorrectas=0 ;

let r1= document.getElementById("p1").value;
let r2= document.getElementById("p2").value;
let r3= document.getElementById("p3").value;
let r4= document.getElementById("p4").value;

if (r1=== "correcto"){
    correctas++;
} else {
    incorrectas++;
}

if (r2=== "correcto"){
    correctas++;
} else {
    incorrectas++;
}

if (r3=== "correcto"){
    correctas++;
} else {
    incorrectas++;
}

if (r4=== "correcto"){
    correctas++;
} else {
    incorrectas++;
} 

}
