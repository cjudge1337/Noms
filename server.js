const axios = require('axios');
const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/fetchData', (req, res) => {
  axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then((data) => {
      res.send(data);
    })
    .catch(error => {
      console.error(error);
    })
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
