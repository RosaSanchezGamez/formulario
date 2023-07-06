
const form = document.querySelector('form')
const usuario = document.getElementById('NOMBRE_APELLIDO')
const dni = document.getElementById('NUMERO_DNI')
const fechadeNacimiento = document.querySelector('input[type="date"]');
const correo = document.getElementById('CORREO_INSTITUCIONAL')
const contrasenia = document.getElementById('CONTRASEÑA')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    validaCampos()
})

const validaCampos = ()=> {
    const usuarioValor = usuario.value
    const dniValor = dni.value
    const contraseniaValor = contrasenia.value
    const correoValor = correo.value
    const fechadeNacimientoValor = fechadeNacimiento.value
 
    if(!usuarioValor){
        alert("Campo de usuario vacio, intentelo de nuevo")
    }
    if(!contraseniaValor){
      alert("Campo de contraseña vacio, intentelo de nuevo")          
    }
    if(!correoValor){
      alert("Campo de correo vacio, intentelo de nuevo")
    }
    if(!fechadeNacimientoValor){
      alert("Campo de fecha de nacimiento vacio, intentelo de nuevo")          
    }if(!dniValor){
        alert("Campo de dni vacio, intentelo de nuevo")          
      }

}

  function soloLetras(e) {
    var key = e.keyCode || e.which,
      tecla = String.fromCharCode(key).toLowerCase(),
      letras = " áéíóúabcdefghijklmnñopqrstuvwxyz",
      especiales = [8, 37, 39, 46],
      tecla_especial = false;

    for (var i in especiales) {
      if (key == especiales[i]) {
        tecla_especial = true;
        break;
      }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
      return false;
    }
  }

  function soloNumero(e) {
    var key = e.keyCode || e.which,
      tecla = String.fromCharCode(key).toLowerCase(),
      letras = " 0123456789",
      especiales = [8, 37, 39, 46],
      tecla_especial = false;

    for (var i in especiales) {
      if (key == especiales[i]) {
        tecla_especial = true;
        break;
      }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
      return false;
    }
  }
