require('dotenv').config();
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

async function verifyAdminToken(req, res, next) {
    console.log('Verifying admin token');
    console.log(req.headers);
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.sendStatus(401);
    }
    jwt.verify(token, process.env.ADMIN_ACCESS_TOKEN_SECRET, async (err, admin) => {
        if (err) {
            return res.sendStatus(403);
        }
        const adminDetails = await Admin.findOne({ email: admin.email });
        console.log(adminDetails);
        req.admin = adminDetails;
        next();
    });
}

module.exports = verifyAdminToken;
