const express = require('express');

const app = express();
const port = 443;
const path = require('path');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
const axios = require('axios');

app.use(express.static(PUBLIC_DIR));
app.use(express.json());

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});