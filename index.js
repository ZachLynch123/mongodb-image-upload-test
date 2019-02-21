const express = require('express');
const mongoose = require('mongoose');
const parser = require('body-parser');

// initialize app
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(5000, () => console.log('app started on port 5000'))

// use body-parser middleware
app.use(parser.json());

