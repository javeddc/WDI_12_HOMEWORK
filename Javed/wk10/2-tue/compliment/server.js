var app = require('express')();
var _ = require('lodash');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const PORT = 5000;

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(bodyParser.json());

var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you"
]
var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

function indexPage(req, res) {
  res.render('index', {compliment: _.sample(compliments), color: _.sample(colors)})
}
function namePage(req, res) {
  res.render('index', {compliment: 'Hey ' + req.params.name + ', ' + _.sample(compliments), color: _.sample(colors)})
}
function addPage(req, res) {
  res.render('add', {color: _.sample(colors)})
}
function addCompliment(req, res) {
  compliments.push(req.body.newCompliment);
  res.render('added', {newCompliment: req.body.newCompliment, color: _.sample(colors)})
}

app.post('/new', urlencodedParser, addCompliment);
app.get('/add', addPage);
app.get('/:name', namePage);
app.get('/', indexPage);
app.listen(PORT, function() {
  console.log('listening on port ' + PORT);
})
