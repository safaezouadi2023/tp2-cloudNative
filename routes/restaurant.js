const express = require('express');
const router = express.Router();

// Définissez ici les routes pour '/chefs', '/recette', ou '/restaurant'
router.get('/', (req, res) => {
  res.send('Réponse depuis le routeur correspondant.');
});

module.exports = router;