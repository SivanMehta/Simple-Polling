var express = require("express");
var morgan = require('morgan');

var app = express();
app.set('view engine', 'ejs');
app.use(morgan('tiny'));

// load the routes
require('./routes/poll.js').init(app);
app.get('/', function(request, response)
{
    response.render("index");
});
app.use(express.static(__dirname + '/views'));

app.listen(50000);

console.log("Server listening at http://localhost:50000/");
