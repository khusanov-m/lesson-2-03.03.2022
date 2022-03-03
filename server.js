const express = require('express');

require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
  res.send('Hello world123!');
});

app.listen(process.env.PORT, () => {
  const host = 'localhost';
  // eslint-disable-next-line no-console
  console.log(`Example app listening on port 300! ${host}`);
});
