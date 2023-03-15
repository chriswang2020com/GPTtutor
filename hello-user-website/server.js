const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist')));

app.post('/greet', (req, res) => {
  const { name } = req.body;
  res.send(`Hello, ${name}!`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});