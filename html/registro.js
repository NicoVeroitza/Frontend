document.addEventListener("submit", function(evento){
    evento.preventDefault();
    if(validarCamposRegistro()){
        document.location.href = "inicio.html";
    }

});

function validarCamposRegistro(){
    let validado = true;
    const campoNombre = document.getElementById("inputNombre");
    const campoApellido = document.getElementById("inputApellido");
    const campoEmail = document.getElementById("inputEmail");
    const campoPassword = document.getElementById("inputPassword");
    const campoDireccion = document.getElementById("inputDireccion");
    const campoTelefono = document.getElementById("inputTelefono");

    // Regex para comprobar longitud (8-16), presencia de un número y un carácter especial
    var regexPassword= /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;

    // Regex para comprobar formato de email
    var regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(campoNombre.value.trim().length == 0){
        campoNombre.style.borderColor = "red";
        campoNombre.style.borderWidth = "5px";

        validado = false;
    }

    if(campoApellido.value.trim().length == 0){
        campoApellido.style.borderColor = "red";
        campoApellido.style.borderWidth = "5px";

        validado = false;
    }

    if(!campoEmail.value.match(regexEmail)){
        campoEmail.style.borderColor = "red";
        campoEmail.style.borderWidth = "5px";

        validado = false;
    }

    if(!campoPassword.value.match(regexPassword)){
        campoPassword.style.borderColor = "red";
        campoPassword.style.borderWidth = "5px";

        validado = false;
    }

    if(campoDireccion.value.trim().length == 0){
        campoDireccion.style.borderColor = "red";
        campoDireccion.style.borderWidth = "5px";

        validado = false;
    }

    if(campoTelefono.value.trim().length < 8){
        campoTelefono.style.borderColor = "red";
        campoTelefono.style.borderWidth = "5px";

        validado = false;
    }

    return validado;

}

// Limpia los campos marcados por validación
function resetearValidacion(elemento){
    elemento.style.borderColor = "";
    elemento.style.borderWidth = "2px";
}