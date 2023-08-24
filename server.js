const express = require('express');
const path = require('path');

const app = express();
const port = 7891;

app.use(express.static('dist'));

app.use((req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log('express server started');
});