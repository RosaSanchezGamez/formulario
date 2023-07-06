function validarPassword(password){
    const decimal = ^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$;

    if (password.value.match(decimal)) {
        alert("Contraseña segura")
    } else {
        alert("Ingrese el formato correcto de la contraseña")
    }

}