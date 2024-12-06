const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 8080;
const url = "mongodb://127.0.0.1:27017/CraftShow";
const path = require('path');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const listRouter = require("./routes/list.js")
const reviewRouter = require('./routes/review.js')
const session = require('express-session');
const flash = require('connect-flash')
const passport = require('passport')
const localStrategy = require('passport-local')
const User = require('./models/user.js')
const UserRoute = require('./routes/user.js')

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));
const expresserror = require('./utils/expresserror.js');



const sessionOption = {
    secret: "this is secretOption",      
    resave: false,                   
    saveUninitialized: true,
    cookie: {
        maxAge: 24 * 60 * 60 * 1000,  // Session cookie will expire in 24 hours
        httpOnly: true,  // Prevents client-side JavaScript from accessing the cookie
    }
};

app.use(session(sessionOption))
app.use(flash())
app.use(passport.initialize())
app.use(passport.session())
passport.use(new localStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req,res,next)=>{
res.locals.success = req.flash('success')
res.locals.error = req.flash('error')
res.locals.currUser = req.user;
next();
})

async function main() {
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
}
main();


app.use(('/home',listRouter))
app.use(('home/reviews/:id',reviewRouter))
app.use(('/',UserRoute))


app.get('/dmca', (req, res) => {
    res.render('footer/dmca');  // Render the DMCA page
});

// Privacy Policy Route
app.get('/privacypolicy', (req, res) => {
    res.render('footer/privacypolicy');  // Render the Privacy Policy page
});

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    
    // You can process the form data here, e.g., send an email
    console.log('Message from:', name, 'Email:', email, 'Message:', message);
    req.flash('success','Your Mail Have Been Sent')
    // Send a response or redirect
    res.redirect('/contactus')
  });

// Contact Us Route
app.get('/contactus', (req, res) => {
    res.render('footer/contactus');  // Render the Contact Us page
});



app.all("*", (req, res, next) => {
    next(new expresserror(404, "Page not found"));
});

app.use((err, req, res, next) => {
    let { status = 500, message = 'Something went wrong' } = err;
    res.status(status).render('errorhandling/error', { message });
});

app.listen(port, () => {
    console.log('Server is live on port ' + port);
});

