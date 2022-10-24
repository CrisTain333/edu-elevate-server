const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')

app.use(cors())

app.get('/',(req,res)=>{
    res.send('App On Fire');
})

app.listen(port,()=>{
    console.log('App Fire On Port 5000')
})