const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const path = require('path');

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))

const list = [];

app.get('/', (req, res) => {
    res.render('home', { list: list })
})

app.post('/', (req, res) => {
    list.push(req.body.todo)
    res.redirect('/')
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
