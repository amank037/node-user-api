const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const User = require('./user.js')

const app = express()

app.use(express.static('public'))
app.use(cors())
app.use(express.json())

app.post('/users', async (req, res) => {
    try {
        const newUser = new User(req.body)

        await newUser.save()

        res.status(201).send({ message: 'user created'})
    } catch (err) {
        res.status(400).send({
            message: 'failed to create user',
            error: err.message || 'unknown error'
        })
    }
})

app.get('/', (req, res) => {
    res.send('Server is working')
})

app.get('/users', async (req, res) =>{
    try{
        const users = await User.find()
        res.json(users)
    } catch (error) {
        res.status(500).json({message: "Failed to retrieve users", error: error.message})
    }
})

mongoose.connect('mongodb+srv://amankhanapp:aman54321@cluster0.sk7quy9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));

app.listen(3000, () => {
    console.log('server started on port 3000')
})