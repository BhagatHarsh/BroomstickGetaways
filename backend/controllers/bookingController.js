const Package = require('../models/Package');
const Booking = require('../models/Booking');

async function bookPackage(req, res) {
    try {
        const package = await Package.findById(req.body.id);
        if (!package) return res.status(404).send('Package not found');
        
        const newBooking = new Booking({
            user: req.user._id,
            package: req.body._id,
            dateOfBooking: Date.now()
        });
        
        const savedBooking = await newBooking.save();
        res.json(savedBooking).status(200);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = { bookPackage };
