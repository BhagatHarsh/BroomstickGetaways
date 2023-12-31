const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    bookedPackages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Package' }],
}, { timestamps: true });


module.exports = mongoose.model('User', UserSchema);