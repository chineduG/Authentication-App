// const e = require('express')
var express = require('express');
var router = express.Router();


const credential = {
    email:'momo@gmail.com',
    password: 'momo'
}

// login user and auto redirect to Dashboard
router.post('/login', (req, res) => {
    if(req.body.email == credential.email
        && req.body.password == credential.password){
            req.session.user = req.body.email;
            res.redirect('/route/dashboard');

            // res.end('Login Successful....');
     } else{
         res.end('Invalid Username')
     }
})

// router for dashboard
router.get('/dashboard', (req, res)=>{
    if(req.session.user){
        res.render('dashboard', {user: req.session.email})
    } else{
        res.send('Unauthorized Username')
    }
})

module.exports = router;