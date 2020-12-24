const express = require('express'); /* importer express */


const app = express(); /* Pour créer une application express */

app.use((req, res) => { /* l'appli utilise cette fonction pour tout type de requètes */
res.json({ message: 'vorte requète a bien été reçu !'}); /* l'objet réponse en json */

});


module.exports = app; /* exporter notre app */