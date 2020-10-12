const express = require('express');

const app = express();

// express middleware which can change the request before
// getting the routes

app.use((req, res, next) => {
    console.log("hello");
    next();
})

app.get('/', (req, res) => {
    const user = {
        name:'Ayesha',
        hobby:'shopping'
    }
    res.send(user);
});


app.get('/profile', (req, res) => {
    res.send("getting the profile");
});

app.listen(3000);