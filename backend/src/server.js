const dotenv = require('dotenv').config()
const colors = require('colors')
const cors = require('cors')
const connectDB = require('./config/mongoDB')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5005
const routes = require('./routes/indexRoutes')

connectDB()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(routes)





app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}...`.gray.underline)
})