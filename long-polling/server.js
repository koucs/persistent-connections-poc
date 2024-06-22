const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

let events = [];
let eventIndex = 0;

app.get('/long-polling', (req, res) => {
  console.log('/long-polling', events)
  if (events.length > eventIndex) {
    res.send(events[eventIndex++]);
  } else {
    setTimeout(() => {
      res.send(events[eventIndex++]);
    }, 10000);
  }
});

app.post('/event', (req, res) => {
  events.push(req.body);
  console.log('/event', events)
  res.send();
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
