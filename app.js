const express = require('express');
const bodyParser = require('body-parser');
let items = [];
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const option = { weekday: 'long', month: 'long', day: 'numeric' };
  let weekDay = new Date();
  weekDay = weekDay.toLocaleDateString('en-US', option);
  res.render('lists', { today: weekDay, insideList: items });
});

app.post('/', (req, res) => {
  item = req.body.listEntry;
  items.push(item);
  res.redirect('/');
});

app.listen(process.env.PORT || port, () => {
  console.log(`App running at port ${port}`);
});
