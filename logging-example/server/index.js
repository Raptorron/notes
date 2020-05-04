const express = require('express');
const app = express();
app.use(express.json());
const path = require('path');
const db = require('./db');
const routes = require('./routes')
const port = process.env.PORT || 3000;

app.use(require('express-session')({
  secret: process.env.SECRET
}));
app.use('/', routes);
app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res, next)=> {
  res.sendFile(path.join(__dirname, '../index.html'));
});

db.syncAndSeed()
  .then(()=> app.listen(port, ()=> console.log(`listening on port ${port}`)));
