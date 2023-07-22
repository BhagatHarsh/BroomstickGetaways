require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Admin = require('../models/Admin');

async function generateAdminToken(req, res) {
    // Generate hash for password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Generate token
    const token = jwt.sign({ email: req.body.email }, process.env.ADMIN_ACCESS_TOKEN_SECRET);
    
    // Create new Admin
    const newAdmin = new Admin({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        token: token
    });

    // Save Admin to database
    await newAdmin.save();


    res.json({ token }).status(201);
}

module.exports = generateAdminToken;
