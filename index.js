const express = require('express');
const app = express();

// Configurar las rutas aquí

const PORT = 5000;
app.listen(PORT);
console.log(`Running on port ${PORT}`);

app.get('/', (req, res) => {
    res.send('Bienvenido a mi aplicación');
  });

  app.get('/clientes', (req, res) => {
    res.send('Estos son mis tres clientes: Juanito, Kelvin, Bruno');
  });

  app.get('/productos', (req, res) => {
    res.send('Estos son mis tres productos: CocaCola, InkaCola, Pepsi');
  });