const express = require('express');

//client side
const cors = require('cors')

const app = express();
const port = process.env.PORT || 5000;


//1. client side call-------------------
app.use(cors())
//2. get data (cors middleware)
app.use(express.json());


app.get('/', (req, res) => {
    res.send("Hello From my over personal Smarty Smarty Pant !! with auto restart")
});

// custom api --

const users = [
    { id: 1, name: 'Sabana', email: 'samaba@gmail.com', phone: '01788888888' },
    { id: 2, name: 'Shabnoor', email: 'Shabnoor@gmail.com', phone: '01788888888' },
    { id: 3, name: 'Sucharita', email: 'Sucharita@gmail.com', phone: '01788888888' },
    { id: 4, name: 'suchonda', email: 'suchonda@gmail.com', phone: '01788888888' },
    { id: 5, name: 'sarabonti', email: 'sarabonti@gmail.com', phone: '01788888888' },
    { id: 6, name: 'sabila', email: 'sabila@gmail.com', phone: '01788888888' },
    { id: 7, name: 'sohana', email: 'sohana@gmail.com', phone: '01788888888' },
]

// app.get('/users', (req,res)=> {
//     res.send(users);
// })


// get full api data---
app.get('/users', (req, res) => {
    //search query or filter by search query parameter
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else {
        res.send(users);
    }

    console.log('query', req.query)
    res.send(users)
})

// dynamic single api data find----
app.get('/user/:id', (req, res) => {
    console.log(req.params);

    //-------- for == 
    // const id = req.params.id;

    // const user = users[id];
    // const user = users.find(u => u.id == id);


    //------ for ===
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);

    // response send
    res.send(user);
});

//add a new data (dynamic data)----------
app.post('/user', (req, res) => {

    console.log('request', req.body);

    const user = req.body;
    //add dynamic user id 
    user.id = users.length + 1;
    //set all user value bu users
    users.push(user);
    res.send(user)
});




app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'oranges'])
});

app.get('/fruits/mango/fazle', (req, res) => {
    res.send('sour sour fazle flavor');
});


app.listen(port, () => {
    console.log('Listening to Port is ', port)
});