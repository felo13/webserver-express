const http = require('http');

// Forma  más sencilla que crea un HTML por defecto para escribir el hola mundo
/* http.createServer((req, res) => {
        res.write('Hola mundo');
        res.end();
    })
    .listen(8080);
 */

// Si nqueremos que se devuelva un Json en lugar de un html
http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        let salida = {
            nombre: 'Andres',
            edad: 35,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(8080);

console.log('Escuchando el puerto 8080');