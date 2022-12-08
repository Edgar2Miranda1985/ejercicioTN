let electrodomesticos = ["lavarropa","heladera","cocina","televisor","licuadora","plancha"];
// // Acceder de manera aleatoria
// console.log(electrodomesticos[2]);
// // Extraer el primer elemento
// electrodomesticos.shift();
// console.log(electrodomesticos);
// // Agregar al final
// electrodomesticos.push("extractor","secador de pelo");
// console.log(electrodomesticos);
// Cantidad de elementos que tiene el array
// console.log(electrodomesticos.length);
// // Buscar un elemento Array
// let elemento = electrodomesticos.lastIndexOf("lavarropa");
//     if (elemento != -1){
//         console.log("Producto encontrado");
//     }else {
//             console.log("El producto buscado no existe");
//     }
// Unificar los Array
let unificar = electrodomesticos.join(" ");
// console.log(unificar);
// Determinar la cantidad de elementos
console.log(unificar.length);
// Cambiar nombre de la cadena de texto
console.log(unificar.replace("heladera","ventilador"));
// Nuevo Array con la cadena de texto
console.log(unificar.split(" "));
