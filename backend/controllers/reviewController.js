const Review = require('../models/Review');

async function createReview(req, res) {
    console.log("createReview")
    console.log(req.body);
    try {
        const newReview = new Review({
            user: req.user._id,
            package: req.body._id,
            reviewText: req.body.reviewText,
            rating: parseInt(req.body.rating)
        });
        await newReview.save();
        res.status(200).json({});
    } catch (error) {
        console.error(error); // Log the error object to the console
        res.status(500).send("Dementors on the loose! Error: "+ error.message);
    }
}

async function getReviews(req, res) {
    console.log("getReviews")
    console.log(req.body);
    try {
        const packageId = req.body._id;
        const reviews = await Review.find({ package: packageId }).populate('user', 'name');
        console.log(reviews);
        res.json(reviews);
    } catch (error) {
        res.status(500).send("Dementors on the loose! Error: " + error.message);
    }
}


module.exports = { createReview, getReviews };
