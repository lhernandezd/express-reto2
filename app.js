const express = require('express');
const app = express();

//Rutas
app.get('/', (req,res) => {
  res.send('<h1>HcUy6Re2LLBRtj</h1>');
});

//Puerto
app.listen(3000, () => {
  console.log('Listening on port 3000!');
});
