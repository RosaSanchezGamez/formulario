var express = require("express");
var mysql = require("mysql");
var app = express();
var cors = require("cors");

app.use(express.static(__dirname));

app.use(express.urlencoded({ extended: true }));

app.get("/",(req,res) =>{
res.sendFile(path.join(__dirname + "/formulario.html"));
});

app.use(express.json());
app.use(cors());
var conexion = mysql.createConnection({
    host: "34.236.196.31",
    user: "rosa",
    password: "ROsa123*@",
    database: "vallegrande",
});


conexion.connect(function (error) {
    if (error) {
        throw error;
    } else {
        console.log("Conexión exitosa");
    }
});
const puerto = process.env.PUERTO || 3000;


app.listen(puerto, function () {
    console.log("Servidor funcionando en puerto: " + puerto);
});


app.post("/api/formulario_vg", (req, res) => {
    let data = {
        CARRERA: req.body.CARRERA,
        NOMBRE_APELLIDO: req.body.NOMBRE_APELLIDO,
        NUMERO_DNI: req.body.NUMERO_DNI,
        FECHA_NACIMIENTO: req.body.FECHA_NACIMIENTO,
        CORREO_INSTITUCIONAL: req.body.CORREO_INSTITUCIONAL,
        CONTRASEÑA: req.body.CONTRASEÑA,
        ACEPTAR: req.body.ACEPTAR
    };
    let sql = "INSERT INTO formulario_vg SET ?";
    conexion.query(sql, data, function (error, results) {
    if (error) {
        throw error;
    } else {
        console.log(data);
        res.send(data);
    }
    });
  });
