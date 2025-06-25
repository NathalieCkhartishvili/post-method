// ! npm i npm
// ! npm init
// ! npm i express ejs nodemon

const express = require('express')
const path = require('path')

const app = express()
PORT = 9600
const fruits = require('./data/data.json')

app.get('/fruits', (req, res)=> {
    // res.send('hello')
    res.json(fruits)
})

app.get('/fruits/:id', (req, res)=> {
    const fruit_id = Number(req.params.id) 

    const fruit = fruits[fruit_id]
    if(fruit) {
        res.status(200).json(fruit)
    } else {
         res.status(404).json({err : 'such fruit not found'})
    }

})


app.use((req, res)=> {
     res.status(404).json({err : 'page not found'})
})

app.listen(PORT, ()=> console.log('server start'))