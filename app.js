let express = require('express');
let networksRouter = require('./routes/networks');

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/networks', networksRouter);

module.exports = app;
