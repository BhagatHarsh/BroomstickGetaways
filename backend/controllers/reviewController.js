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
        res.status(500).send("Dementors on the loose! Error: " + error.message);
    }
}

async function getReviews(req, res) {
    console.log("getReviews");
    try {
        const reviews = await Review.find({})
            .populate('user', 'name')
            .populate('package', 'name')
            .sort({ createdAt: -1 }) // Sort by createdAt in descending order
            .limit(8); // Limit the number of reviews to 8
        res.json(reviews);
    } catch (error) {
        res.status(500).send("Dementors on the loose! Error: " + error.message);
    }
}


module.exports = { createReview, getReviews };
