require('dotenv').config() // to use dotenv

const express = require('express')
const app = express()
const jwt = require('jsonwebtoken') 
const verifyToken = require('./middleware/auth')
app.use(express.json()) // post dang json
const users= [
    {
        id:1,
        username:"duc"
    },
    {
        id: 2,
        username:'tran'

    }
]

app.get('/posts',verifyToken,(req,res)=>{
    res.json({posts:'my posts'})
})

app.post('/login',(req,res)=>{
    const username = req.body.username
    const user = users.find(user=> user.username === username)
    //check user if not exist end error401
    if(!user) return res.sendStatus(401)
    //check user if user exist create jwt
    const accessToken = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)
    res.json({accessToken})
})

const PORT = process.env.PORT || 4000
app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`))