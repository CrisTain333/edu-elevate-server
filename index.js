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

app.get("/courses/:id",(req,res)=>{
    const id = req.params.id;
    const selectedData = data.find(d=> d.id === id)
    res.send(selectedData);
    
})
app.get("/checkout/:id",(req,res)=>{
    const id = req.params.id;
    const selectedData = data.find(d=> d.id === id)
    res.send(selectedData);
    
})

app.listen(port,()=>{
    console.log('App Fire On Port 5000')
})