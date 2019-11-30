const mongoose = require('mongoose');
const tickets = require('./routes/tickets');
const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost/eventcontroller',  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

app.use(express.json());
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});
app.use('/api/tickets', tickets);
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));