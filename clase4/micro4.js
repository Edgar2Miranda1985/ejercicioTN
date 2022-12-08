//Mi 1er calculadora

let operación = "dividir".toLowerCase();
let valor1 = 10;
let valor2 = 10;
switch (operación) {
    case "sumar":
        console.log("El resultado de la suma " + (valor1 + valor2));
        break;
    case "restar":
        console.log("El resultado de restar " + (valor1 - valor2));
        break;
    case "multiplicar":
        console.log("El resultado de multiplicar " + (valor1 * valor2));
        break;
    case "dividir":
        console.log("El resultado de dividir " + (valor1 / valor2)); 
        break;
    default:
            console.log("Very difficult");
    }