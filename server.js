const express = require('express')
const port = process.eventNames.port || 9090
const path = require('path')
const bodyparser = require('body-parser')
const {v4:uuidv4} = require('uuid')

const session = require('express-session')
const bodyParser = require('body-parser')

const router = require('./router')
const app = express()




// body parser
app.use(bodyparser.json());
app.use(bodyParser.urlencoded({extended:true}))

// ejs 
app.set('view engine', 'ejs')

// load static assets
app.use('/static',express.static(path.join(__dirname, 'public')))
app.use('/assets', express.static(path.join(__dirname, 'public/assets')))

// session using uuidv4
app.use(session({
    secret: uuidv4(),
    resave: false,
    saveUninitialized: true
}))

app.use(`/route`,router)

// home route
app.get('/', (req, res)=>{
    res.render(`base`, {title:'Authentication System'});
})


app.listen(port, () => console.log(`Server app listening on http://localhost:${port}.`))