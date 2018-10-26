const express = require('express');
const router = express.router();

const Movie = require('../models/movie');
const MovieService = new Movie();

router.route('/movies').get( (req, res) => {
    let movies = MovieService.getAllMovies();
})

route.route('/movies/:id', (req, res) => {
    if(! req.params.id){
        res.sendStatus(400)
    }
    let movieId = req.params.id;
    let movie = MovieService.getMovieById(movieId);
    res.json(movie);
})


route.route('/movies/:id').put ((req, res) => {
    if(! req.params.id || !req.body){
        res.sendStatus(400)
    }
    let movieId = req.params.id;
    let movie = MovieService.getMovieById(movieId);
    res.json(movie);
})


route.route('/movies').post ((req, res) => {
    if( !req.body){
        res.sendStatus(400)
    }
    let movie = req.body;
    MovieService = 
    res.json(movie);
})