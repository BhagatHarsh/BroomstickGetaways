require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

async function verifyToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.sendStatus(401);
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, user) => {
        if (err) {
            return res.sendStatus(403);
        }
        const userDetails = await User.findOne({ email: user.email});
        req.user = userDetails;
        next();
    });
}

module.exports = verifyToken;
