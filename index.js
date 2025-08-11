const express = require('express');
require('dotenv').config()
require('colors')
const app = express()


app.use('/api/users', require('./routes/userRoutes') )


app.listen( process.env.PORT,()=>console.log(`server started on port:${process.env.PORT.bgBlue}`))