const mongoose = require('mongoose');

const UserShema = new mongoose.Schema({
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
const UserModel = mongoose.model('Users', UserShema);
module.exports = UserModel;
