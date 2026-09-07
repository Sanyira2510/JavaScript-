function calcularPresupuesto(){ 
let precioProcesador= parseInt(document.getElementById("Procesador").value);
    let precioRam= parseInt(document.getElementById("Monitor").value);
    let precioDisco= parseInt(document.getElementById("Disco").value); 

    let presupuestoTotal= precioProcesador + precioMonitor + precioDisco;
    <input type = "text">de total </input>
    document.getElementById("total").value= "$"+ presupuestoTotal;



}
 