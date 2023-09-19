const express = require('express');
const mongoose = require('mongoose');
const app = express();

//connect to db
mongoose
	.connect('mongodb://127.0.0.1:27017/MernSatckProject', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('Connexion à MongoDB réussie');
	})
	.catch((err) => {
		console.error('Erreur de connexion à MongoDB :', err);
	});

//import User model
const UserModel = require('./models/Users');

app.get('/users', (req, res) => {
	UserModel.find().exec((err, users) => {
		if (err) {
			console.error('Erreur lors de la recherche des utilisateurs :', err);
			res.status(500).json({ error: 'Une erreur est survenue lors de la recherche des utilisateurs.' });
		} else {
			console.log(users); // Affichez les données dans la console pour vérification
			res.json(users); // Renvoyez le tableau d'objets directement au format JSON
		}
	});
});



app.listen('8000', () => {
	console.log('server work');
});
