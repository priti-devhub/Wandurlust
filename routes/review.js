const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const{validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");
 const {listingSchema, reviewSchema}= require("../schema.js");

 const reviews = require("../controllers/reviews.js");


//REVIEW ROUTE
router.post("/",
    isLoggedIn,
    validateReview,
    wrapAsync(reviews.createReview))

//DELETE REVIEW ROUTE
router.delete("/:reviewId" ,isLoggedIn, isReviewAuthor,wrapAsync(reviews.deleteReview));

module.exports = router;
