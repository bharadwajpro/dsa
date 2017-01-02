var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var compression = require('compression');


app.use(compression());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.post('/googleac87b1d2968e5435.html', function(req, res){
	res.sendFile(__dirname + '/googleac87b1d2968e5435.html');
});

app.listen(process.env.PORT || 3000, function () {
	console.log('Server started on port 3000');
});
