const express = require('express')
const dotenv = require('dotenv')
const { errorHandler } = require('./middleware/errorHandler')
const { connectDB } = require('./config/db')
dotenv.config()

const PORT = process.env.PORT || 5000
//connect to db
connectDB()
const app = express()



app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/',(req, res)=>{
    res.status(200).json({message:'Welcome to project managment api'})
})

//Routes
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/projects', require('./routes/projectRoutes'))
app.use(errorHandler)

app.listen(PORT,()=> console.log(`Server running at port ${PORT}`))