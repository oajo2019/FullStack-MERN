const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI
    ? process.env.MONGODB_URI
    : 'mongodb://localhost/BDprueba';
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});//realiza coneccion
const connection = mongoose.connection;
connection.once('open', () => { //una vez la conexion este abierta  escriba db is conected
    console.log('db is conected...' + URI);
});
