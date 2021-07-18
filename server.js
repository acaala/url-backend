require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const urlRoutes = require('./routes/urlRoutes')
const app = express()

const dbURI = process.env.DB_URI

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection;
db.once('open', () => console.log('Connected to DB'))

app.use(express.json())
app.use(cors({
    origin: '*'
}))
app.use('/', urlRoutes)

app.listen(process.env.PORT || 5000)
console.log(`Listening on Port: ${process.env.PORT || 5000}`)