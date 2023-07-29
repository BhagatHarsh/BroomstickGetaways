async function getUsername(req, res) {
    try {
        const user = req.user;
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send("Dementors on the loose! Error: " + error.message);
    }
}

module.exports = { getUsername };