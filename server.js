const axios = require('axios');
const CircularJSON = require('circular-json');
const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(__dirname));

app.get('/fetchData', (req, res) => {
  axios.get('http://date.jsontest.com')
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch(error => {
      console.error(error);
    })
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
