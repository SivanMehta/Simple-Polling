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


ipaddress = "127.0.0.1";
port = 50000;

app.listen(port, ipaddress, function()
{
    console.log("Server listening at " + ipaddress + ":" +port)
});

