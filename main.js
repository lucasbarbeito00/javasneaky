
function precioServicio(numero)
{
    switch(numero) {
        case 1:
            alert("El servicio de limpiado de zapatillas tiene un valor de $15000");
            break;
        case 2:
            alert("el servicio de lavado + sellado de proteccion tiene un valor de $25000");
            break;
        case 3:
            alert("el servicio de repelente de liquidos tiene un valor de $10000");
            break;
        case 4:
            alert("el servicio de restauracion de zapatillas tiene un valor de $30000");
            break;
        default:
            alert("Disculpa pero contactanos para poder brindarte una mejor ayuda...");
    }
}

function servicios() {
     let numeroServicio = prompt("Ingresa el numero se servicio")
    
     if (numeroServicio !== '' && numeroServicio !== null) {
        precioServicio(parseInt(numeroServicio))
     } 
     
     else{
        console.warn("Ingresaste un numero de servicio incorrecto")
     }
}




 function servicios() {
    let preguntar = true

    while(preguntar){
        let numeroServicio = prompt("Ingresa el numero se servicio")
    
        if (numeroServicio !== '' && numeroServicio !== null) {
           precioServicio(parseInt(numeroServicio))
        } 
        
        else{
           console.warn("Ingresaste un numero de servicio incorrecto")
        }
        
        preguntar = confirm("¿Deseas saber el precio de otro servicio?")

    }
 }