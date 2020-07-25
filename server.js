const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const path = require('path');

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))

let list = [];

app.get('/', (req, res) => {
    res.render('home', { list: list })
})

app.post('/single-todo', (req, res) => {
    const index = list.indexOf(req.body.singleTodo)
    if (index > -1)
        list.splice(index, 1)
})

app.post('/', (req, res) => {
    list.push(req.body.todo)
    if (req.body.todo === '') list.pop()
    res.render('home', { list: list })
})

app.post('/delete', (req, res) => {
    list = []
    res.redirect('/')
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
