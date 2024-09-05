const express = require('express')

const app = express()

const usersRouter = require('./Modules/Auth')

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Welcome to the Product API')
})

app.use('/api', usersRouter);


app.listen(8080, (req, res) => {
    console.log('Server running on port 8080')
})