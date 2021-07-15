const express = require('express');
const cors = require('cors');
const { User } = require('./model');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req,res) => {
    res.json('Server is running boiza!')
})

app.get('/users', async (req,res) => {
    try {
        const users = await User.all
        res.json(users)
    } catch(err) {
        res.status(500).json({err})
    }
})

app.get('/users/:id', async (req,res) => {
    try{
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch(err) {
        res.status(404).json(err);
    }
})

app.post('/users', async (req,res) => {
    try{
        const newUser = await User.create(req.body);
        res.status(201).json(newUser)
    } catch(err) {
        res.status(400).json(err)
    }
})

module.exports = { app };