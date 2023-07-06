const url = "http://34.236.196.31:3000/api/FORMULARIO_VG/";
let resultados = '';
const formArticulo = document.querySelector("form");
const carreraForm = document.querySelector('input[name="carrera"]:checked');
const NOMBRE_APELLIDO = document.getElementById("NOMBRE_APELLIDO");
const NUMERO_DNI = document.getElementById("NUMERO_DNI");
const FECHA_NACIMIENTO = document.getElementById("FECHA_NACIMIENTO");
const CORREO_INSTITUCIONAL = document.getElementById("CORREO_INSTITUCIONAL");
const CONTRASEÑA = document.getElementById("CONTRASEÑA");
var opcion = '';


btnCrear.addEventListener('click', () => {
    console.log("Acción de listar activada");
    opcion = 'crear';
});


formArticulo.addEventListener('submit',
    (e) => {
     e.preventDefault();
     if (opcion == 'crear') {
         if (NOMBRE_APELLIDO.value == "" || NUMERO_DNI.value == "" || FECHA_NACIMIENTO.value == "" 
         || CORREO_INSTITUCIONAL.value == "" || CONTRASEÑA.value == "" || carreraForm.value == "") {
             alert("Asegúrese de que todos los campos estén completos");
             return false;
         } else {
             console.log("Todos los campos están completos");
             fetch(
                 url,
                 {
                     method: 'POST',
                     headers: {
                         'content-Type':'application/json'
                     },
                     body: JSON.stringify(
                         {
                            CARRERA: carreraForm.value,
                            NOMBRE_APELLIDO: NOMBRE_APELLIDO.value,
                            NUMERO_DNI: NUMERO_DNI.value,
                            FECHA_NACIMIENTO: FECHA_NACIMIENTO.value,
                            CORREO_INSTITUCIONAL: CORREO_INSTITUCIONAL.value,
                            CONTRASEÑA:CONTRASEÑA.value,
                            ACEPTAR:"TRUE"
                         }
                     )
                 }
             )
             .then(
                 response => response.json()
             )
             .then(
                 response => location.reload()
             );
         }
     } else if(opcion == 'editar'){
         console.log("Activado el ");
     }
    }
);
