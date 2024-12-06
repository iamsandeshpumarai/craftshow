const express = require('express');
const router = express.Router({mergeParams:true})
const wrapAsync = require('../utils/wrapAsync')
const listings = require('../models/listing')
const Review = require('../models/review.js');
const { isloggedIn, isReviewAuthor } = require('../middleware.js');

//reviews route
router.post('/home/:id/reviews',isloggedIn, async (req, res) => {
    try {
      
        let list = await listings.findById(req.params.id);
        let newReview = new Review({
            comment: req.body.review.comment,
        });
        newReview.author = req.user._id
        console.log(newReview)
 await newReview.save();
 list.review.push(newReview);
   await list.save();
   req.flash('success','Comment Have been Added')
        res.redirect(`/home/${list._id}`);
    } catch (err) {
        console.log(err);
        res.status(500).send("Error saving review");
    }
});

//reviews route delete
router.delete('/home/:id/reviews/:reviewId', isloggedIn, wrapAsync(async (req, res) => {
    const { id, reviewId } = req.params;

    await listings.findByIdAndUpdate(id, { $pull: { review: reviewId } });


    await Review.findByIdAndDelete(reviewId);

    req.flash('success','Comment Deleted')
    res.redirect(`/home/${id}`);
}));
module.exports = router
