let perfil = "Rocko".toLowerCase();
//blanco “Debe especificar el perfil del usuario”
//administrador  “Usted tiene todos los privilegios de uso del sistema”.
// asistente “Usted sólo tiene permisos de registrar, modificar y consultar datos”
//invitado  “Usted sólo tiene permisos de consultar datos”
//valor diferente a la variable perfil entonces se debe mostrar este mensaje: “Debe especificar un perfil válido”.
switch (perfil){
case "":
    console.log("Debe especificar el perfil del usuario");
    break;
case "ADMINISTRADOR":
case "administrador":
case "Administrador":
    console.log("Usted tiene todos los privilegios de uso del sistema");
    break;
case "asistente":
    console.log("Usted sólo tiene permisos de registrar, modificar y consultar datos"); 
    break;
case "invitado":
    console.log("Usted sólo tiene permisos de consultar datos"); 
    break;
default:
        console.log("Debe especificar un perfil inválido");
}

