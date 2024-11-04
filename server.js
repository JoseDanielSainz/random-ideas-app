const express = require('express')
require('dotenv').config()
const port = process.env.PORT || 5000
const connectDB = require('./config/db')

connectDB()

const app = express()

// Body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// create a route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the RandomIdeas API' })
})

const ideasRouter = require('./routes/ideas')
app.use('/api/ideas', ideasRouter)


// to create a server
app.listen(port, () => console.log(`Server listening on port ${port}`))