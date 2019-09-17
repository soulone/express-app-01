//[Modulos]
var express = require("express");
var bodyParser = require("body-parser");

//Inicializar

//Inicializa el bodyParser
var app = express();
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
//Definir Static
app.use(express.static("./public"));

//[Rutas]
app.get("/", function(req, res) {
  // Ruta Raiz (/)
  console.log("servidor  de  prueba corriendo en /");
  //res.send('Home');//Imprime direcatmente.
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/Nosotros", function(req, res) {
  // Ruta Nosotros (/Nosotros)
  console.log("serviror de pueba corriendo en /Nosotros");
  //res.send('Home/Nosotros')
  res.sendFile(__dirname + "/views/nosotros.html");
});

app.get("/Contactos", function(req, res) {
  console.log("Servidor de prueba corriendo en /Contactos");
  res.sendFile(__dirname + "/views/contactos.html");
});

//[POST]

app.post("/Respuesta", function(req, res) {
  nombre = req.body.nombre;
  apellido =  req.body.apellido;
  email= req.body.email;
  fecha = req.body.fecha;
  mensaje = req.body.mensaje
  res.send(
    '<!DOCTYPE html> <html lang="en">   <head>     <meta charset="UTF-8" />     <meta name="viewport" content="width=device-width, initial-scale=1.0" />     <meta http-equiv="X-UA-Compatible" content="ie=edge" />     <link rel="stylesheet" href="stylesheets/bootstrap.min.css" />     <link rel="scripts" href="scripts/bootstrap.min.js" />     <title>Nosotros</title>   </head>   <body>     <nav class="navbar navbar-light bg-light" style="background-color: #fff2cc!important;" >       <a class="navbar-brand" href="/">         <img           src="img/mango.svg"           width="30"           height="30"           class="d-inline-block align-top"           alt=""         />         <strong class="text-monospace">Mango</strong         ><small class=" mx-2 small text-monospace badge badge-primary text-wrap"           >Servers</small         >       </a>     </nav>     <article class="containter">             <div class="jumbotron jumbotron-fluid d-flex justify-content-center m-0 bg-warning">                     <div class="container text-center">                             <img src="img/mango.svg" alt=""  width="50"                             height="50">                             <h1 class="display-4 font-weight-bold text-monospace">Mango </h1>                             <h1 class="h5 text-danger font-weight-bold text-monospace">Sweet Technology </h1>                             <p class="lead small  text-monospace mx-2">                              Mango Servers es una extesion de nuestra marca Mango , en Mango servers encontraras productos dedicados a empresas que requieran comprar servidores para sus empresas.                             </p>                           </div>                   </div>     </article>     <ul         class="nav nav-pills  text-monospace sticky-top nav bg-light justify-content-center align-items-center "         style="height: 2rem"       >       <li class="nav-item  small">           <a class="nav-link   " href="/">Inicio</a>         </li>         <li class="nav-item small">           <a class="nav-link" href="/nosotros">Nosotros</a>         </li>         <li class="nav-item ">           <a class="nav-link active shadow" href="/contactos">Contacto</a>         </li>         <li class="nav-item small">           <a class="nav-link disabled" href="/productos">Productos</a>         </li>       </ul>      <div class="container p-5">             <div class="jumbotron">                     <h1 class="h2">Gracias por contactarnos , revisa tu correo proximamente </h1>                     <h1>' +
    nombre + apellido + mensaje + email + 
      '</h1>                   </div>      </div>     <footer>       <div class="jumbotron jumbotron-fluid bg-white">         <div class="container ">           <div class="row  text-center d-flex justify-content-around">             <div class="col-sm">               <span class="navbar-brand mb-3" href="#">                 <img                   src="img/mango.svg"                   width="30"                   height="30"                   class="d-inline-block align-top"                   alt=""                 />                 <strong class="text-monospace">Mango</strong                 ><small                   class=" mx-2 small text-monospace badge badge-primary text-wrap"                   >Servers</small                 >               </span>               <ul>                   <li class="pt-3 text-uppercase" style="list-style:none"></li>Lima,Lima,Miraflores </li>                   <li class="pt-3 text-uppercase"  style="list-style:none"><a href="">Politicas de privacidad</a></li>                                  </ul>             </div>             <div class="col-sm text-center">               <span>                 <strong class="text-monospace text-center"                   >Productos y servicios</strong                 >               </span>                <ul class="mt-3  list-group list-group-flush">                 <li class="list-group-item">Venta de servidores</li>                 <li class="list-group-item">Servicio de mantenimiento</li>                 <li class="list-group-item">Servicios de asesoramiento</li>                 <li class="list-group-item">Servicio de configuracion e instalacion</li>               </ul>             </div>             <div class="col-sm text-center">               <span>                 <strong class="text-monospace ">Compañia</strong>               </span>               <ul class="mt-3 list-group list-group-flush">                 <li class="list-group-item">Nosotros</li>                 <li class="list-group-item">Contactenos</li>               </ul>             </div>           </div>         </div>       </div>     </footer>   </body> </html>'
  );
});

//[Puertos]
app.listen(3000, function() {
  console.log("servirdor en el puerto 3000");
});
