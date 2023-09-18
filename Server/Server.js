const express = require('express');
const app = express();

app.get("/", (req, res) => {
	res.send("Heloo Samoura");
});

app.listen('8000', () => {
	console.log('server work');
});
