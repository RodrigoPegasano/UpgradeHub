// CREANDO UN SERVIDOR DE CERO
const http = require('http');

// Utilizar puertos de 3000 en adelante
const port = 3000;

// req -> petición (para leer la información)
// res -> respuesta (para responder)
function answer(req, res) {
    console.log(req.url);
    /* if(req.url == "/productos") {
        res.end('<h1>Pagina de productos</h1>');
    } else if (req.url == "/usuarios") {
        res.end('<h1>Pagina del usuario</h1>');
    } else {
        res.end('<h1>Pagina inicial</h1>');
    } */
    res.setHeader("Content-Type", "application/json");

    if (req.url == "/usuario") {

        res.end(JSON.stringify({ nombre: "Rodrigo", dni: 123456789 }));

    } else if (req.url == "/productos") {

        res.end(JSON.stringify([
            {
                id: 1,
                nombre: 'lavadora'
            }, {
                id: 2,
                nombre: 'batidora'
            }
        ]))

    }
}

const server = http.createServer(answer);

server.listen(port, () => {
    console.log(`Está funcionando en el puerto ${port}`);
})

//-------------------------------------------------------------------------------------------------

// STRINGIFY & PARSE

/* const persona = {
    nombre: "Rodrigo",
    dni: 123456789
}

// Imprime un objeto
console.log(persona);

// Transforma de objeto a string
const personaTexto = JSON.stringify(persona);
console.log(personaTexto);

const texto = personaTexto;

// Transforma el string en objeto
const persona2 = JSON.parse(texto);
console.log(persona2); */