const express = require('express')
const path = require('path')

const app = express()

app.use(express.json()) // Json data
app.use(express.urlencoded({ extended: false})) // Form data

// Set specific folder as static folder
app.use(express.static('public'))

app.get('/', (req, res) => {
    // res.send('Hello FROM Express')
    // res.send(req.header('host'))
    // res.send(req.header('user-agent'))
    res.send(req.rawHeaders)
})

app.post('/contact', (req, res) => {
    if(!req.body.name) {
        return res.status(400).send('Name is required')
    }
    // res.send(req.body)
    res.status(201).send(`Thank you ${req.body.name}`)
})

// app.post('/login', (req, res) => {
//     if(!req.header('x-auth-token')) {
//         return res.status(400).send('No Token')
//     }

//     if(req.header('x-auth-token') !== '123456') {
//         return res.status(401).send({ 'status': 'Not authorized'})
//     }

//     res.send('Logged in')
// })

// app.put('/post/:id', (req, res) => {
//     res.json({
//         id: req.params.id,
//         title: req.body.title
//     })
// })

app.delete('/post/:id', (req, res) => {
    res.json({msg: `Post ${req.params.id} deleted`})
})

app.listen(5000, () => {
    console.log(`Server started on 5000`)
})