require('dotenv').config(); // For loading environment variables
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

// Import controllers
const userController = require('./controllers/userController');
const packageController = require('./controllers/packageController');
const bookingController = require('./controllers/bookingController');
const adminController = require('./controllers/adminController');
const reviewController = require('./controllers/reviewController');
const verifyToken = require('./middlewares/verifyJWT');
const verifyAdminToken = require('./middlewares/verifyAdminJWT');
const generateAdminToken = require('./middlewares/generateAdminToken');

// Backend server code
const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());
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

// User routes
app.post('/register', userController.register);
app.post('/login', userController.login);
app.get('/profile', verifyToken, userController.profile);

// Package routes
app.get('/packages', packageController.getPackages);
app.get('/package/:id', packageController.getPackage);

// Review routes
app.post('/reviews', reviewController.getReviews);
app.post('/review', verifyToken, reviewController.createReview);

// Booking route
app.post('/book', verifyToken, bookingController.bookPackage);

// Admin routes
app.post('/admin/create', generateAdminToken);
app.get('/admin/sales', verifyAdminToken, adminController.getSalesData);
app.post('/admin/package', verifyAdminToken, adminController.createPackage); 
app.put('/admin/package/:id', verifyAdminToken, adminController.updatePackage);
app.delete('/admin/package/:id', verifyAdminToken, adminController.deletePackage); 


// Start the server at port 3000
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
