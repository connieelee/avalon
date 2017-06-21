const express = require('express');
const morgan = require('morgan');
const chalk = require('chalk');
const path = require('path');

const app = express();

app.use(morgan('dev'));

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './browser/index.html'));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message || 'ahh, something\'s wrong');
});

app.listen(1337, () => {
  console.log(chalk.cyan('listening on 1337'));
});
