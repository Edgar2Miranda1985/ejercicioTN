function montoAPagar(tipoVehiculo, diasAlquiler, sillaBebe){
    let valorCompactoPorDia = 14000;
    let valorMedianoPorDia = 17000;
    let valorCamionetaPorDia = 28000;
    let silleB = 1200;
    let total = 0;

    switch (tipoVehiculo) {
        case "Compacto":
            total = valorCompactoPorDia * diasAlquiler;    
            break;
        case "Mediano":
            total = valorMedianoPorDia * diasAlquiler;    
            break;
        case "Camioneta":
            total = valorCamionetaPorDia * diasAlquiler;    
            break;
        default:
            return "Tipo no valido";
            break;
    }
if (sillaBebe) {
    total = total + (silleB * diasAlquiler);
    return "Estimado cliente: en base al tipo de vehiculo " + tipoVehiculo + " alquilado, considerando los " + diasAlquiler + " dias utilizados y la silla para bebe, el monto total a pagar es de $" + total;
}
    return " Estimado cliente: en base al tipo de vehiculo " + tipoVehiculo + " alquilado, considerando los," +
    diasAlquiler + " dias utilizados el monto total a pagar es de $ " + total;
}
console.log("El alquiler se fue a las nubes ", montoAPagar("Mediano", 10, true),"\n");
console.log("El alquiler se fue a las nubes ", montoAPagar("Camioneta", 10, false),"\n");
