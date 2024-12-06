const express = require('express');
const router = express.Router()
const wrapAsync = require('../utils/wrapAsync')
const listings = require('../models/listing')
const {isloggedIn} = require('../middleware.js')



// Search route
router.get('/home/search', wrapAsync(async (req, res) => {
    const { query } = req.query;  // Get the search query from the form
    const searchResults = await listings.find({
        $or: [
            { title: { $regex: query, $options: 'i' } },  // Case-insensitive search for title
            { artist: { $regex: query, $options: 'i' } }  // Case-insensitive search for artist
        ]
    });
    res.render('listing/searchResult', { list: searchResults, query });
}));


router.get('/user/arts', isloggedIn, wrapAsync(async (req, res) => {
    // Assuming 'req.user' contains the current logged-in user (if you're using Passport.js or a similar method)
    const userArts = await listings.find({ owner: req.user._id });
  
    // Render the arts list for the user
    res.render('user/userArts', { arts: userArts });
  }));

// index or home routes
router.get('/home', wrapAsync(async (req, res) => {
    const alllist = await listings.find({});
    res.render('listing/index', { list: alllist });
}));

//  new routes
router.get('/home/new',isloggedIn , wrapAsync((req, res) => {
    if(!req.isAuthenticated()){
req.flash('error',"You Must Logged In Before Adding")
return res.redirect('/login')
    }
    res.render('listing/new');
}));


// Route to get listings sorted by the number of likes in descending order
router.get('/home/ranked', async (req, res) => {
    try {
        // Get all listings sorted by likes in descending order
        const listingsRanked = await listings.find().sort({ likes: -1 });

        res.render('listing/rankedhome', { listings: listingsRanked });
    } catch (err) {
        req.flash('error', 'Could not fetch the listings');
        res.redirect('/home');
    }
    console.log(listings)
});


// Add like functionality (Instagram-like "love" button)
router.post('/home/:id/like', isloggedIn, wrapAsync(async (req, res) => {
    const list = await listings.findById(req.params.id);
    if (!list) {
        req.flash('error', 'Art not found');
        return res.redirect('/home');
    }

    // Increase the likes count by 1
    list.likes += 1;
    await list.save();
    
    // Redirect back to the listing's details page
    res.redirect(`/home/${list._id}`);
}));

// show
// show
router.get('/home/:id', async (req, res) => {
  
    let list = await listings.findById(req.params.id)
    .populate({
        path: 'review',       
        populate: {
            path: 'author'    
        }
    })
    .populate('owner');   

        if(!list){
            req.flash('error','Art not available')
            res.redirect('/home')
                }

          

        res.render('listing/show', { list });  // Pass populated list to EJS
    
});




// added routes
router.post('/home', wrapAsync(async (req, res) => {
  
    const newlist = new listings(req.body.list);
    newlist.owner = req.user._id
    await newlist.save();
    req.flash('success','Your Arts Have Been Added To The List')
    res.redirect('/home');
}));

// edit routes 
router.get('/home/:id/edit',isloggedIn , wrapAsync(async (req, res) => {
    const { id } = req.params;
    const lists = await listings.findById(id);
    if(!lists){
        req.flash('error','Not Available')
        res.redirect('/home')
            }
    res.render('listing/edit', { list:lists });
}));

// Add like functionality (Instagram-like "love" button)
router.post('/home/:id/like', isloggedIn, wrapAsync(async (req, res) => {
    const list = await listings.findById(req.params.id);
    if (!list) {
        req.flash('error', 'Art not found');
        return res.redirect('/home');
    }

    // Increase the likes count by 1
    list.likes += 1;
    await list.save();
    
    // Redirect back to the listing's details page
    res.redirect(`/home/${list._id}`);
}));


// edited routes
router.put('/home/:id', wrapAsync(async (req, res) => {
    const { id } = req.params;
    await listings.findByIdAndUpdate(id, req.body.list, { new: true });
    req.flash('success','Successfully Edited')
    res.redirect('/home');
}));

// delete routes
router.delete('/home/:id',isloggedIn, wrapAsync(async(req, res) => {
    const { id } = req.params;
    await listings.findByIdAndDelete(id);
    req.flash('success','Your Arts Have Been Deleted')
    res.redirect('/home');
}));

module.exports = router