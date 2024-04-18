const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const dbUrl = process.env.URL_MONGOOSE;
const dbName = process.env.DBNAME;

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true, dbName })
  .then(() => {
    console.log('Connexion à la base de données MongoDB établie');
  })
  .catch((error) => {
    console.error('Erreur lors de la connexion à la base de données MongoDB:', error);
  });


const chefRoutes = require('./routes/chef');
app.use('/chefs', chefRoutes);

const recetteRoutes = require('./routes/recette');
app.use('/recette', recetteRoutes);


const restaurantRoutes = require('./routes/restaurant');
app.use('/restaurant', restaurantRoutes);