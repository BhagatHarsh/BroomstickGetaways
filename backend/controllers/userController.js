require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

async function register(req, res) {
    console.log('Registering user');
    console.log(req.body);
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        });
        const savedUser = await user.save();
        res.json(savedUser).status(201);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function login(req, res) {
    console.log('Logging in user');
    console.log(req.body);
    try {
        const user = await User.findOne({ email: req.body.email});
        console.log(user);
        if (!user) {
            return res.status(400).send('Cannot find user');
        }
        const passwordMatch = await bcrypt.compare(req.body.password, user.password);
        if (passwordMatch) {
            const expirationTime = Math.floor(Date.now() / 1000) + (60 * 60);
            const accessToken = jwt.sign({ email: user.email, exp: expirationTime }, process.env.ACCESS_TOKEN_SECRET);
            res.json({ accessToken }).status(200);
        } else {
            res.send('Not Allowed').status(401);
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

async function profile(req, res) {
    console.log('Getting user profile');
    console.log(req.user);
    res.json(req.user).status(200);
}

module.exports = { register, login, profile };
