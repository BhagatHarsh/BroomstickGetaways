const Package = require('../models/Package');
const Booking = require('../models/Booking');

async function createPackage(req, res) {
    console.log('Creating package');
    console.log(req.body);
    try {
        const travelPackage = new Package({
            name: req.body.name,
            price: req.body.price,
            itinerary: req.body.itinerary,
            images: req.body.images,
            admin: req.admin._id // including the adminId who created the package
        });
        const savedPackage = await travelPackage.save();
        res.json(savedPackage);
    } catch (error) {
        res.status(500).send("Transfiguration failed! Error: " + error.message);
    }
}

async function updatePackage(req, res) {
    console.log('Updating package');
    console.log(req.body);
    try {
        req.body.admin = req.admin._id;
        const updatedPackage = await Package.findOneAndUpdate({ _id: req.params.id, admin: req.admin._id }, req.body, { new: true });
        if (!updatedPackage) return res.status(404).send('The Room of Requirement couldn’t locate your package!');
        res.json(updatedPackage);
    } catch (error) {
        res.status(500).send("Expecto Patronum failed! The dementor, err...error persists: " + error.message);
    }
}

async function deletePackage(req, res) {
    try {
        const deletedPackage = await Package.findOneAndRemove({ _id: req.params.id, admin: req.admin._id });
        if (!deletedPackage) return res.status(404).send('The Vanishing Cabinet couldn’t make your package disappear!');
        res.json(deletedPackage);
    } catch (error) {
        res.status(500).send("Used Obliviate but the error didn't forget to appear: " + error.message);
    }
}

async function getSalesData(req, res) {
    try {
        // Fetching packages created by this admin only
        const packages = await Package.find({ admin: req.admin._id });
        const salesData = [];

        for(const travelPackage of packages) {
            const bookings = await Booking.find({ package: travelPackage._id }).populate('user');
            const revenue = bookings.reduce((total, booking) => total + travelPackage.price, 0);
            salesData.push({
                packageName: travelPackage.name,
                bookings: bookings.length,
                totalRevenue: revenue
            });
        }
        res.json(salesData);
    } catch (error) {
        res.status(500).send("Oh no, troll in the dungeon! Error: " + error.message);
    }
}

module.exports = {createPackage, updatePackage, deletePackage, getSalesData };
