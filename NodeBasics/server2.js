const express = require('express');

const app = express();

// express middleware which can change the request before
// getting the routes

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/profile', (req, res) => {
    req.query;
    req.body;
    req.header;
    req.params;
    res.send("getting the profile");
});

app.listen(3001);