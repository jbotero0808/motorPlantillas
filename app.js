const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

const personas = [
    { nombre: 'Juan', apellido: 'Pérez', edad: 30 },
    { nombre: 'Ana', apellido: 'López', edad: 25 },
    { nombre: 'Carlos', apellido: 'Gómez', edad: 40 },
];

const productos = [
    { nombre: 'Coca-cola', precio: "$3.000" },
    { nombre: 'Pan', precio: "$3.500" },
    { nombre: 'Salchichón', precio: "$2 .700" },
];

app.get('/', (req, res) => {
    const registro = true;
    res.render('index', { personas, productos, registro });
});

app.get('/producto', (req, res) => {
    res.render('producto', { productos });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
