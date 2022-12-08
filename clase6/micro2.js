// ‘Turno de
// día’, ‘30 noches con mi ex’, ‘Bestia’, ‘El monte’, ‘Top gun maverick',
// ‘Elvis’,‘Thor: amor y trueno’

let peliculas = "Turno de día, 30 noches con mi ex , Bestia, El monte, Top gun maverick, Elvis, Thor: amor y trueno"
function toUpper(peliculas){
    return peliculas.toUpperCase();
}
// console.log(toUpper("Chucky"));
// // convertir el string en array
let arrayPeliculas = peliculas.split(", ");
// console.log(arrayPeliculas);
// // buscar la pelicula que quiero
let indexPeli = arrayPeliculas.indexOf("Thor: amor y trueno");
// // obtener la pelicula
let peliQuieroVer = arrayPeliculas.splice(indexPeli, 1)
// console.log("PeliQuieroVer", peliQuieroVer, arrayPeliculas);
// pasar a mayuscula
let peliEnMayus = toUpper(peliQuieroVer[0]);
// console.log("peliEnMayus",peliEnMayus); 
// Agregar el array en el 1er lugar
arrayPeliculas.unshift(peliEnMayus);
// console.log(arrayPeliculas);
// nuevo listado de peliculas
let nuevoListadoDePeliculas = "Counter-Strike, NOP, Vértigo, Nick, Avatar";
let newArrayPeliculas = nuevoListadoDePeliculas.split(", ")
// console.log(newArrayPeliculas);
// no es una pelicula es un juego
let newArrayPeli = newArrayPeliculas.indexOf("Counter-Strike");
// obtener el juego
let juegoARemover = newArrayPeliculas.splice(newArrayPeli, 1);
console.log(juegoARemover, newArrayPeliculas);
function concatenacion(array1, array2){
    return array1.concat(array2);
}
console.log("concatenar", concatenacion(arrayPeliculas, newArrayPeliculas));
