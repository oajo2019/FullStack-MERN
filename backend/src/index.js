require('dotenv').config(); //antes de iniciar la app importa variables de entorno
const app = require('./app'); //importa el servidor para usarla
require('./database');
async function main() {
    await app.listen(app.get('port')); //await es para manejar asicoronia apenas termine ejecuta el consolego
    console.log("servidor escuchando en puerto ", app.get('port'));
}

main();