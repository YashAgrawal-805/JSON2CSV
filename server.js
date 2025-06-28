const express = require('express');
const bodyParser = require('body-parser');
const { Parser } = require('json2csv');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/', (req, res) => {
  const jsonData = req.body;

  if (!Array.isArray(jsonData)) {
    return res.status(400).send('Invalid JSON: expected an array of objects');
  }

  try {
    const json2csvParser = new Parser();
    const csv = json2csvParser.parse(jsonData);
    res.header('Content-Type', 'text/csv');
    res.attachment('data.csv');
    return res.send(csv);
  } catch (err) {
    console.error('Error converting to CSV:', err);
    return res.status(500).send('Failed to convert JSON to CSV');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
