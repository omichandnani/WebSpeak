const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
// const urlencodedParser = bodyParser.urlencoded({ extended: false });
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(expressLayouts);
app.set("view engine", "ejs");
app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render("index")
});

app.get('/build', function(req, res) {
  res.render("build")
});

app.post('/deploy', function(req, res) {
  console.log(req.body.site);
  fs.writeFile(`./views/${req.body.name}.ejs`, req.body.site, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
    // res.send(`/website/${req.body.name}`);
    res.redirect(`/website/${req.body.name}`)
  });
});

app.get('/website/:name', function(req, res) {
  res.render(`${req.params.name}.ejs`)
});

app.listen(process.env.PORT || 5000, function() {
  console.log('Example app listening on port 5000!');
});



