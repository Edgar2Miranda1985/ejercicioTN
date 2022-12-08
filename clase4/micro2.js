let pagoMes = 12000;
let consumoKWH = 450;
let porcentajeAumento = 1.20;
let limiteDeConsumo = 300;
let resultado = consumoKWH < limiteDeConsumo ? "Debido a que su hogar tuvo un consumo de" + consumoKWH +  "kwh, en base al ajuste tarifario(hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%),cumplimos con informarle que se ha ajustado el total a pagar, que será de " + (pagoMes * porcentajeAumento): "con subcidio";
console.log(resultado);
