const express = require('express');
const axios = require('axios');

const app = express();

app.get('/game_info/hogwarts_legacy', async (req, res) => {
    const url = "https://www.pcgamingwiki.com/w/api.php";
    const params = {
        action: "cargoquery",
        tables: "Infobox_game",
        fields: "Infobox_game._pageName=Page,Infobox_game.Developers,Infobox_game.Released,Infobox_game.Cover_URL",
        where: "Infobox_game._pageName='Hogwarts_Legacy'",
        format: "json"
    };
  
    try {
        const response = await axios.get(url, { params: params });
        res.json(response.data);
    } catch (error) {
        console.error(`Error making API request. ${error}`);
        res.status(500).send(`Error making API request. ${error}`);
    }
});

app.listen(3000, function () {
    console.log('App listening on port 3000.');
});
