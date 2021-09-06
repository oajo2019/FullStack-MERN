// archivo donde definimos nuestro servidor

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const bodyParser = require('body-parser');
const app = express(); //servidor llamado app 

// SETTINGS
app.set('port', process.env.PORT ? process.env.PORT : 4000);

//opcional



//middlewares se ejecutan antes de llegar a las rutas
app.use(cors()); //permite interactuar con otras servidores
app.use(express.json()); //para que entiedna archivos json y string


//routes
app.use('/api/users', require('./routes/users')) //cada vez que el usuario visite /api/users use el archvio /routes/users donde estan las reutas
app.use('/api/notes', require('./routes/notes'))

module.exports = app;