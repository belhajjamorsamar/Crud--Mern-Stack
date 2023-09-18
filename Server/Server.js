const express = require('express');
const mongoose = require('mongoose');
const app = express();

//connect to db
mongoose
	.connect('mongodb://localhost:27017/MernSatckProject', {
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

app.get('/users', async (req, res) => {
	const users = await UserModel.find();
	res.json(users);
});

app.listen('8000', () => {
	console.log('server work');
});
