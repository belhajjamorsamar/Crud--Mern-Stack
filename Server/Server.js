const express = require('express');
const app = express();

const mongoose = require("mongoose")
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });



app.get("/", (req, res) => {
	res.send("Heloo Samoura");
});

app.listen('8000', () => {
	console.log('server work');
});
