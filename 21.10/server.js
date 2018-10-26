const express = require('express');
const path = requier('path');

const MoviesController = require('./routes/MoviesController');

const app = express();
app.use( express.json() );
app.use( express.static( path.join(__dirname, '/public') ) );

app.use('/api', MoviesController);