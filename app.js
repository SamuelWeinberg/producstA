const express = require('express');
const path = require('path');

const {roterInit,origin } = require('./router/approuter')
require('./db/mongodb')

let app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname,'public')))
origin(app)
roterInit(app)

let port = process.env.PORT || 3000;
app.listen(port);