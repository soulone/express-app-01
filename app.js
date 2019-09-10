//LLama
var express =  require ('express');
//Inicializa
var app =  express();



//Definir Static
app.use(express.static('./public'));

//[Rutas]
app.get('/',function(req,res){// Ruta Raiz (/)
    console.log('servidor  de  prueba corriendo en /');
    //res.send('Home');//Imprime direcatmente.
    res.sendFile(__dirname+ '/views/home.html');
});

app.get('/Nosotros',function(req,res){// Ruta Nosotros (/Nosotros)
    console.log('serviror de pueba corriendo en /Nosotros');
    //res.send('Home/Nosotros')
    res.sendFile(__dirname+'/views/nosotros.html');
})

app.get('/Contactos',function(req,res){
    console.log('servidro de prueba corriendo en /Contactos');
    res.sendFile(__dirname+'/views/contactos.html');
});


//[Puertos]
app.listen(3000,function(){
    console.log('servirdor en el puerto 3000');
});
