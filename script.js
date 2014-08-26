var express = require('express');

var app = express.createServer();

var lessons = require('./data/lessons').data;

app.get('/', function(req, res){
  res.render('index.ejs', {title: 'Where We Sell English'});
});

app.get('/lessons', function(req, res{
  res.render('lessons.ejs',{
     title: 'The Magic Happens Here.',
     lessons: lessons
  }):
        })):
app.get('/*', function(req, res){
  res.status(404).render('error.ejs', {title: 'Error'});
});

app.listen(3000);