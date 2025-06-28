const express = require('express');
const bodyParser = require('body-parser');
const { Parser } = require('json2csv');

const app = express();
const port = 3000;

app.use(express.json());

app.use(bodyParser.json());

app.post('/', (req, res) => {
  res.send(req.body)
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
