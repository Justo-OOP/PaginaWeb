/********************** Formulario **********************/
function validacion(event) {
    let bordeContenedor = document.getElementsByClassName("borde-contenedor");
    let nombre = document.getElementById("Nombre");
    let apellidos = document.getElementById("Apellidos");
    let email = document.getElementById("Mail");
    let numero = document.getElementById("telefono");
  
    // Restablecer el color del borde a aqua antes de la validación
    for (let i = 0; i < bordeContenedor.length; i++) {
        bordeContenedor[i].style.border = "1px solid aqua";
    }
  
    // Establecer el color del borde a rojo si no está bien relleno el formulario
    if (nombre.value === "" || apellidos.value === "" || email.value === "" || numero.value === "") {
        if (nombre.value === "") {
            event.preventDefault();
            bordeContenedor[0].style.border = "2px solid red";
        }
        if (apellidos.value === "") {
            event.preventDefault();
            bordeContenedor[1].style.border = "2px solid red";
        }
        if (email.value === "") {
            event.preventDefault();
            bordeContenedor[2].style.border = "2px solid red";
        }
        if (numero.value === "") {
            event.preventDefault();
            bordeContenedor[3].style.border = "2px solid red";
        }
    }
  }
  document.getElementById("miFormulario").addEventListener("submit", validacion);
/********************** Formulario **********************/