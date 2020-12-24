const http = require('http'); /* l'acces à l'objet http */
const app  = require('./app'); /* importer*/

app.set('port', process.env.PORT || 3000); /* dire à l'appli sur quel port elle va tourner */
const server = http.createServer(app);

server.listen(process.env.PORT || 3000); /* pour écouter le port par défaut '3000' sinon process.env.PORT nous permet d'utiliser un autre. */ 
