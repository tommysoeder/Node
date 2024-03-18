require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const asyncErrors = require('express-async-errors');

const app = express();

app.use(express.json());

app.use(morgan('dev'));

let planets = [
  { id: 1, name: "Earth" },
  { id: 2, name: "Mars" }
];

app.get('/planets', (req, res) => {
  res.json(planets);
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Error');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Port ${PORT}`);
});
