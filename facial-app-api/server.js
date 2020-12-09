const express = require('express');

const app = express();

app.get('/', (req, resp) => {
    resp.send('this is working');
})

app.listen(3000, () => {
    console.log('app is running on port 3000');
})

/*

Planning out the api :
 / -> this is working
 /signin -> POST success/fail
 /register -> POST user
 /profile/:userId -> GET user
 /image -> PUT user 

*/