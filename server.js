const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
const port = 5000;
let connectionString = ''

app.use(bodyParser.json());

//Import Routes
const ammoRoute = require('./routes/ammo.js');
app.use('/ammo', ammoRoute);

const keyRoute = require('./routes/keys.js');
app.use('/keys', keyRoute);

//Routes
app.get('/', (req, res) => {
    res.send('We are on home');
});

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true}, () =>
console.log('Connected to DB!')
);

app.listen(port, () => console.log(`Server started on port ${port}`));