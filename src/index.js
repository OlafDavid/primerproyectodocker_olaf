const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Appp corriendo');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`App corrienso en el puerto: ${port}`);
});