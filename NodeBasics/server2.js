const express = require('express');

const app = express();

// express middleware which can change the request before
// getting the routes

app.use((req, res, next) => {
    console.log("hello");
    next();
})

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/profile', (req, res) => {
    res.send("getting the profile");
});


app.post('/profile', (req, res) => {
    console.log('the request is ', req.body);
    res.send('test');
});

app.listen(3000);