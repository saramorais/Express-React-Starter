const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { Client } = require('pg');
require('dotenv').config();

app.set('view engine', 'ejs');
app.use(express.static('client/public'));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.get("/", (req, res) => {
  res.send("root");
});

app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`));