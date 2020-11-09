const { static } = require('express');
const express = require('express');

const app = express();

app.use(static(__dirname + '/public'));

app.listen(3001);