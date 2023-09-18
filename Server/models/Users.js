const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
	},
	age: {
		type: Number,
	},
	email: {
		type: String,
	},
});

const UserModel = mongoose.model('Users', UserSchema); // Utilisez 'User' comme nom du modèle
module.exports = UserModel;
