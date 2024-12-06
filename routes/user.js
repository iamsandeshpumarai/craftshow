const express = require('express');
const router = express.Router()
let User = require('../models/user');
const wrapAsync = require('../utils/wrapAsync');
const passport = require('passport');
const { saveRedirectUrl } = require('../middleware');

router.get('/signup',(req,res)=>{
    res.render('user/signup')
})


// signup
router.post('/signup', wrapAsync(async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const registeruser = await User.register(newUser, password);
        console.log(registeruser);

        req.login(registeruser, (err) => {
            if (err) {
                return next(err);
            }
            req.flash('success', 'Welcome to Craftshow');
            res.redirect('/home'); // Ensure only one redirect here
        });

    } catch (e) {
        req.flash('error', e.message);
        res.redirect('/signup');
    }
}));


//login
router.get('/login',(req,res)=>{
    res.render('user/login')
})
router.post('/login', saveRedirectUrl, passport.authenticate('local',{failureRedirect:'/login',failureFlash:true}),async(req,res)=>{
  
req.flash('success',"Successfully Logged In")
let redirecturl = res.locals.redirectUrl || "/home"
res.redirect(redirecturl)
   
})
//logout
router.get('/logout',(req,res)=>{
    req.logout((err)=>{
        if(err){
         return next(err)
        }

        req.flash('success','You Have Been LoggedOut')
        res.redirect('/home')
    })
})

module.exports = router