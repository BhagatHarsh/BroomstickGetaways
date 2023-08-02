const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    package: { type: mongoose.Schema.Types.ObjectId, ref: 'Package', required: true },
    dateOfBooking: { type: Date, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Booking', BookingSchema);