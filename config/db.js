// This file will be used to connect to our database through mongoose
const mongoose = require('mongoose')

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI)
  console.log(`MongoDB Connected: ${conn.connection.host}`)
}

mongoose.set('strictQuery', true)

module.exports = connectDB

