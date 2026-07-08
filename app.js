const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
const todoRoutes = require ('./router/todo.routes')

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ status: 'ok' });
});

module.exports = app;
