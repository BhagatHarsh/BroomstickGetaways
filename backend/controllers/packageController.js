const Package = require('../models/Package');

async function getPackages(req, res) {
    try {
        const packages = await Package.find();
        res.json(packages);
    } catch (error) {
        res.status(500).send(error);
    }    
}

async function getPackage(req, res) {
    console.log('getPackage');
    console.log(req.params.id);
    try {
        const package = await Package.findById(req.params.id);
        if (!package) res.status(404).send('No package found');
        else res.json(package);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = { getPackages, getPackage };
