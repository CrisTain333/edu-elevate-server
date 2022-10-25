const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')

app.use(cors())

const data = require('./Data/data.json')

app.get('/',(req,res)=>{
    res.send('App On Fire');
})
app.get('/courses',(req,res)=>[
    res.send(data)
])

app.listen(port,()=>{
    console.log('App Fire On Port 5000')
})