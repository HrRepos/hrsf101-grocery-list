// set up our server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const controllers = require('../database/index.js');

app.use((req, res, next) => {
  console.log(`${req.method} request received at ${req.url}`);
  next();
});

// expose a GET route /groceries
app.get('/groceries', (req, res) => {
  controllers.getAllGroceries((err, data) => {
    if (err) {
      res.status(503).send(err);
    } else {
      res.send(data);
    }
  });
});

// expose a POST route /groceries
app.post('/groceries', bodyParser.json(), (req, res) => {
  controllers.addOneGrocery(req.body, (err) => {
    if (err) {
      res.status(500).send();
    } else {
      res.status(201).send();
    }
  });
})

// listen on PORT 3000
const PORT = 3000;
app.listen(PORT, () => {console.log(`listening on port ${PORT}!`)})










