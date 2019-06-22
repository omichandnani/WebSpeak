const express = require('express');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const app = express();

app.use(expressLayouts);
app.set("view engine", "ejs");
app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render("index")
});

app.get('/build', function(req, res) {
  res.render("build")
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
