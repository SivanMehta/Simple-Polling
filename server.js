var express = require("express");
var morgan = require('morgan');

var app = express();
app.use(morgan('tiny'));

require('./routes/poll.js').init(app);

app.listen(50000);

console.log("Server listening at http://localhost:50000/");
