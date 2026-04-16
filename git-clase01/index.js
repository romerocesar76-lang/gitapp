
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Obtener el directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();

const port = 3000;

// Indicamos el public como la carpeta raíz para servir archivos estáticos
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`<h1>Hola Mundo -  Bienveniodo a la Clase de Git</h1>`)
})

app.get('/ecommerce', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/hola', (req, res) => {
  res.send('<h1>Hola, Mundo!</h1>');
});


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})









/* 
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
 */