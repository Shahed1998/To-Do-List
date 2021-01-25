const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const today = new Date();
  console.log(today.getDay());
  if (today.getDay() === 5 || today.getDay() === 6) {
    res.send('Holiday!');
  } else {
    res.send('Workdays');
  }
});

app.listen(process.env.PORT || port, () => {
  console.log(`App running at port ${port}`);
});
