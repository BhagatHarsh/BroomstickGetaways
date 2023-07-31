const Review = require('../models/Review');

async function createReview(req, res) {
    try {
        const newReview = new Review({
            user: req.user._id,
            package: req.body.id,
            review: req.body.review,
            rating: req.body.rating
        });
        const savedReview = await newReview.save();
        res.json(savedReview);
    } catch (error) {
        res.status(500).send("Boggart in the closet! Error: " + error.message);
    }
}

async function getReviews(req, res) {
    try {
        const packageId = req.body.id;
        const reviews = await Review.find({ package: packageId }).populate('user', 'name');
        res.json(reviews);
    } catch (error) {
        res.status(500).send("Dementors on the loose! Error: " + error.message);
    }
}


module.exports = { createReview, getReviews };
