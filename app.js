const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const newDate = new Date();
  const getDay = newDate.getDay();
  const weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const today = weekDays[getDay];
  let infoHalf = `Today is ${today} , `;
  let fullInfo = '';

  if (today === 'Friday' || today === 'Saturday') {
    fullInfo = `${infoHalf}  it's a holiday`;
  } else {
    fullInfo = `${infoHalf} it's a working day`;
  }

  res.render('lists', { today: fullInfo });
});

app.listen(process.env.PORT || port, () => {
  console.log(`App running at port ${port}`);
});
