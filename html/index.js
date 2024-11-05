
document.addEventListener("submit", function (evento) {
    evento.preventDefault();
    if(validacionCamposLogin()){
        document.location.href = "registro.html";
    }
    
});

function validacionCamposLogin(){
    let validado = true;
    const campoEmail = document.getElementById("inputEmail");
    const campoPassword = document.getElementById("inputPassword");

    // Regex para comprobar formato de email
    var regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    // Validación de campo vacío
    if(campoEmail.value.trim().length == 0){
        campoEmail.style.borderColor = "red";
        campoEmail.style.borderWidth = "5px";

        validado = false;
    }

    // Validación de formato de email 
    if(!campoEmail.value.match(regexEmail)){
        campoEmail.style.borderColor = "red";
        campoEmail.style.borderWidth = "5px";

        validado = false;
    }

    if(campoPassword.value.trim().length == 0){
        campoPassword.style.borderColor = "red";
        campoPassword.style.borderWidth = "5px";

        validado = false;
    }

    

    return validado;


}

function resetearValidacion(elemento){
    elemento.style.borderColor = "";
    elemento.style.borderWidth = "2px";
}