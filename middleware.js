const listings = require('./models/listing.js')
const Review = require('./models/review.js')
module.exports.isloggedIn = (req,res,next)=>{if(!req.isAuthenticated()){
    req.session.redirect = req.originalUrl
    req.flash('error',"You Must Logged In First")
    return res.redirect('/login')
        }
    next();
    }

    module.exports.saveRedirectUrl = (req,res,next)=>{
        if(req.session.redirectUrl){
            res.locals.redirectUrl = res.session.redirectUrl
        }
        next()
    }
    module.exports.isOwner = async (req, res, next) => {
        let { id } = req.params;
        
        try {
            // Ensure listing is fetched from the database asynchronously
            let listing = await listings.findById(id);
    
            // Check if the listing exists
            if (!listing) {
                req.flash("error", "Listing not found.");
                return res.redirect(`/home`);
            }
    
            // Check if the current user is the owner of the listing
            if (!listing.owner.equals(res.locals.curruser._id)) {
                req.flash("error", "You don't have permission.");
                return res.redirect(`/home/${id}`);
            }
    
            next();  // Allow the request to proceed
        } catch (error) {
            // Handle any error that occurs during the database query
            console.error(error);
            req.flash("error", "An error occurred while checking ownership.");
            return res.redirect(`/home/${id}`);
        }
    };
    
    // module.exports.isReviewAuthor = async (req, res, next) => {
    //     let { reviewId, id } = req.params;
    //     try {
    //         // Await the asynchronous call to fetch the review from the database
    //         let review = await Review.findById(reviewId);
    
    //         // If no review is found, redirect with an error
    //         if (!review) {
    //             req.flash("error", "Review not found");
    //             return res.redirect(`/home/${id}`);
    //         }
    
    //         // Compare the current user's ID with the review's author ID
    //         if (!review.author.equals(res.locals.curruser._id)) {
    //             req.flash("error", "You don't have permission to perform this action");
    //             return res.redirect(`/home/${id}`);
    //         }
    
    //         // If the user is the author, proceed to the next middleware or route handler
    //         next();
    //     } catch (err) {
    //         console.error(err);
    //         req.flash("error", "Something went wrong");
    //         return res.redirect(`/home/${id}`);
    //     }
    // };
    