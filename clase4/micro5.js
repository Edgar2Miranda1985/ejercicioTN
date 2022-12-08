// desafio extra
let velocidad = 268;
let altura = 150;

switch ((velocidad >= 268 && velocidad <= 278) && (altura >= 150 && altura <= 300)) {
    case true:
        console.log("puede aterrizar");        
        break;
    case false:
            console.log("no puede aterrizar");        
            break;
}
let permisoAterrizaje = (velocidad >= 268 && velocidad <= 278) && (altura >= 150 && altura <= 300)? "permitido" : "denegado";
console.log(permisoAterrizaje); 