var express = require('express');
var app = express();

app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.render('index', { title: 'CMS', message: 'CMS'});
});

app.get('/login', function (req, res) {
  res.render('login', { title: 'CMS - login', message: 'login'});
});

app.get('/registration', function (req, res) {
  res.render('registration', { title: 'CMS - registration', message: 'registration'});
});


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Run server http://%s:%s', host, port);
});
