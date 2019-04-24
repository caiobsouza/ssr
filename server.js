const express = require('express');
const winston = require('winston');
const next = require('next');

const PORT = process.env.PORT || 3030;

const app = next({ dev: true });
const handle = app.getRequestHandler();
winston.add(
  new winston.transports.Console({
    format: winston.format.combine(winston.format.simple()),
  })
);

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, err => {
      if (err) throw err;
      winston.info(`Ready on http://localhost:${PORT}`);
    });
  })
  .catch(ex => {
    winston.log(ex.stack);
    process.exit(1);
  });

module.exports = app;
