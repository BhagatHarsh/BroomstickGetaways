const mongoose = require('mongoose');

mongoose.connect('', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to database');
    })
    .catch((error) => {
        console.error('Error connecting to database', error);
    });

const Package = require('./models/Package');

async function updatePackages() {
    try {
        const packages = await Package.find({});
        for (let pkg of packages) {
            const time = Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6
            await Package.updateOne({ _id: pkg._id }, { $set: { includes: undefined, time: time } });
        }
        console.log('Update complete');
    } catch (err) {
        console.log(err);
    }
}


updatePackages();
