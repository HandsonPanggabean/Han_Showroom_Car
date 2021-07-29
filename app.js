const express = require('express')
const app = express()
const port = 3000
const session = require('express-session')
const router = require('./route/index')

app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')

app.use(session({
    secret: 'hanifson',
    resave: false,
    saveUninitialized: true
}))

app.use(router)

app.listen(port, () => {
    console.log(`return SEMANGAT!!`);
})