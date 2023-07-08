const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('./models/User');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true});

app.post('/register', async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
        username: req.body.username,
        password: hashedPassword
    });
    user.save((err, user) => {
        if (err) return res.status(500).send(err);
        const accessToken = jwt.sign({username: user.username}, process.env.ACCESS_TOKEN_SECRET);
        res.json({accessToken});
    });
});

app.post('/login', async (req, res) => {
    const user = await User.findOne({username: req.body.username});
    if (user == null) return res.status(400).send('Cannot find user');
    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            const accessToken = jwt.sign({username: user.username}, process.env.ACCESS_TOKEN_SECRET);
            res.json({accessToken});
        } else {
            res.send('Not Allowed');
        }
    } catch {
        res.status(500).send();
    }
});

app.get('/profile', verifyToken, (req, res) => {
    res.json(req.user);
});

function verifyToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

app.listen(3000);
