const axios = require('axios');
const express = require('express');
const app = express();

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
