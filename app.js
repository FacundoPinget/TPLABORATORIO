
const express = require('express');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 8081;

//TODO: Requerimos de (hbs);
app.set('view engine', 'hbs');

//TODO: Parciales
hbs.registerPartials( __dirname + '/views/partials');

// Servir contenido estatico 
app.use( express.static('public'))

app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'Facundo Pinget',
        titulo: 'Autos clasicos por: '
    })
  });

  app.get('/generic', function (req, res) {
    res.render('generic')
  });


app.get('/info1', function (req, res) {
  res.render('info1')
  });

app.get('/info2', function (req, res) {
  res.render('info2')
  });

app.get('/info3', function (req, res) {
  res.render('info3')
  });

app.get('/info4', function (req, res) {
  res.render('info4')
  });

  
app.get('/info5', function (req, res) {
  res.render('info5')
  });

app.listen(port, () => {

    console.log(`Escuchando el servidor en el puerto http://localhost:${port}`);
});