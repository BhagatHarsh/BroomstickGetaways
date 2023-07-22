const mongoose = require('mongoose');

const PackageSchema = new mongoose.Schema({
    name: { type: String, required: true , unique: true },
    price: { type: Number, required: true },
    itinerary: { type: String, required: true },
    images: [String], // array of image URLs
    includes: [String], // array of included services/features
    admin: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' }
}, { timestamps: true });

module.exports = mongoose.model('Package', PackageSchema);