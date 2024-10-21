const express = require('express');
const app = express();
const port = 3000;

// Route d'accueil
app.get('/', (req, res) => {
  res.send('Bonjour, Express fonctionne !');
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur Express en cours d'exécution sur http://localhost:${port}`);
});