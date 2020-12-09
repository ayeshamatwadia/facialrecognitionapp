const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const database = {
    users: [
        {
            id: '123',
            name: 'Ayesha',
            email: 'ayesha@test.com',
            password: 'cookie',
            entries: 0,
            joined: new Date()
        },
        {
            id: '124',
            name: 'Nosh',
            email: 'nosh@test.com',
            password: 'cookie2',
            entries: 0,
            joined: new Date()
        }
    ]
}

app.get('/', (req, res) => {
    res.json(database.users);
})

app.post('/signin', (req, res) => {
    const {email, password} = req.body;
    if(email === database.users[0].email && password === database.users[0].password){
        res.json('success');
    } else {
        res.json('failed');
    }
})

app.post('/register', (req, res) => {
  const {email, name, password} = req.body;
  database.users.push(
        {
        id: '125',
        name: name,
        email: email,
        password: password,
        entries: 0,
        joined: new Date()
        }
    )
    res.json(database.users[database.users.length -1]);
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