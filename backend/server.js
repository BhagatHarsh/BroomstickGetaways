require('dotenv').config(); // For loading environment variables

// Load necessary modules and dependencies
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const verifyToken = require('./middlewares/verifyJWT');

// Import controllers
const userController = require('./controllers/userController');
const packageController = require('./controllers/packageController');
const bookingController = require('./controllers/bookingController');

// constants
const PORT = process.env.PORT || 3000;

// Backend server code
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to database');
    })
    .catch((error) => {
        console.error('Error connecting to database', error);
    });

app.post('/register', userController.register);
app.post('/login', userController.login);
app.get('/profile', verifyToken, userController.profile);

app.get('/packages', packageController.getPackages);
app.get('/packages/:id', packageController.getPackage);

app.post('/book', verifyToken, bookingController.bookPackage);


// Start the server at port 3000
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
