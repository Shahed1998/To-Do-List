'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const script = require(__dirname + '/script.js');
const items = [];
const workItems = [];
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('Public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const weekDay = script.getDay();
  res.render('lists', { listTitle: weekDay, insideList: items });
});

app.get('/work', (req, res) => {
  res.render('lists', { listTitle: 'Work', insideList: workItems });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.post('/', (req, res) => {
  console.log(req.body);
  let item = req.body.listEntry;
  let btnName = req.body.submit;

  if (btnName === 'Work') {
    workItems.push(item);
    res.redirect('/work');
  } else {
    items.push(item);
    res.redirect('/');
  }
});

app.listen(process.env.PORT || port, () => {
  console.log(`App running at port ${port}`);
});
