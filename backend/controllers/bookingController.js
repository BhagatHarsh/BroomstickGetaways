const Package = require('../models/Package');
const Booking = require('../models/Booking');

async function bookPackage(req, res) {
    console.log('Booking package');
    console.log(req.body);
    try {
        const package = await Package.findById(req.body._id);
        if (!package) return res.status(404).send('Package not found');

        const newBooking = new Booking({
            user: req.user._id,
            package: req.body._id,
            dateOfBooking: Date.now()
        });

        await newBooking.save();
        res.status(200).send("Booking successful");
    } catch (error) {
        res.status(500).send(error);
    }
}

async function getBookings(req, res) {
    console.log('Getting bookings');
    console.log(req.user);
    try {
        const bookings = await Booking.find({ user: req.user._id })
            .sort({ dateOfBooking: -1 })
            .populate('package','name price time').populate('user','name');
            console.log(bookings);
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).send(error);
    }
}   

module.exports = { bookPackage, getBookings };
