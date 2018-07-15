const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

//Express HBS
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'luis Adrian figueroa'
    });

});

app.get('/about', (req, res) => {

    res.render('about', {
        img: 'assets/img/imagen.png'
    });

});


app.listen(port, () => console.log(`Escuchando peticiones en el puerto ${port}`));