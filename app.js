const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 8000
const users = require('./db/users.json')

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(express.static('public'))
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render('login')
})

app.post('/', (req, res) => {
    const {email, password} = req.body

    const checkUser = users.filter(user => user.email === email)
    let isUser = false
    if(checkUser.length > 0 && password === checkUser[0].password){
        isUser = true
    }
    if(isUser){
        res.status(200).redirect('gemology')
    }
    res.status(401).send('email atau password salah')

})

app.get('/gemology', (req, res) => {
    res.render('chapter4')
})




app.listen(port, () => console.log(`port ${port} is running`))