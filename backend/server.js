require('dotenv').config(); // For loading environment variables

// Load necessary modules and dependencies
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('./models/User');
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to database');
    })
    .catch((error) => {
        console.error('Error connecting to database', error);
    });

app.post('/register', async (req, res) => {
    console.log('post register');
    console.log(req.body);
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = new User({
            username: req.body.username,
            password: hashedPassword,
        });
        const savedUser = await user.save();
        const expirationTime = Math.floor(Date.now() / 1000) + (60 * 60); // Current time + 1 hour
        const accessToken = jwt.sign({ username: savedUser.username, exp: expirationTime }, process.env.ACCESS_TOKEN_SECRET);
        res.json({ accessToken });
    } catch (error) {
        res.status(500).send(error);
    }
});

app.post('/login', async (req, res) => {
    console.log('post login');
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) {
            return res.status(400).send('Cannot find user');
        }
        const passwordMatch = await bcrypt.compare(req.body.password, user.password);
        if (passwordMatch) {
            const expirationTime = Math.floor(Date.now() / 1000) + (60 * 60); // Current time + 1 hour
            const accessToken = jwt.sign({ username: user.username, exp: expirationTime }, process.env.ACCESS_TOKEN_SECRET);
            res.json({ accessToken });
        } else {
            res.send('Not Allowed');
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get('/profile', verifyToken, (req, res) => {
    console.log('get profile');
    res.json(req.user);
});

function verifyToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.sendStatus(401);
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            return res.sendStatus(403);
        }
        req.user = user;
        next();
    });
}


// Start the server at port 3000
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
