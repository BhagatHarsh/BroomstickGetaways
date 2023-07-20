const Package = require('../models/Package');
const Booking = require('../models/Booking');

async function bookPackage(req, res) {
    try {
        const package = await Package.findById(req.body.packageId);
        if (!package) return res.status(404).send('Package not found');
        
        const newBooking = new Booking({
            user: req.user.id,
            package: req.body.packageId,
            dateOfBooking: Date.now()
        });
        
        const savedBooking = await newBooking.save();
        res.json(savedBooking);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = { bookPackage };
