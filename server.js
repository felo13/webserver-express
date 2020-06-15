const express = require('express');
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 8080;

const app = express();

app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



// Cuando el render lo hacemos con hbs, esto no tiene problema
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'andrés felipe jiménez'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

// Todo lo que entre antes del '/' se le aplica el callback que se usa como segundo parámetro
// Forma básica
/* app.get('/', (req, res) => {
    res.send('Hola Mundo');
}); */

// El mismo ejercicio del JSON
// Este código choca con el use de arriba
/* app.get('/', (req, res) => {
    let salida = {
        nombre: 'Andres',
        edad: 35,
        url: req.url
    }
    res.send(salida);
}); */

// Si no hago esto, no me funciona una petición con /data por ejemplo
app.get('/data', (req, res) => {
    res.send('Hola Data');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el ${port}`);
});