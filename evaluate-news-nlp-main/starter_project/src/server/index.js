var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
module.exports = app;
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

console.log(__dirname);

// Variables for url and api key


app.get('/', function (req, res) {
    res.send("This is the server API page, you may access its services via the client app.");
});


// POST Route

app.post('/api', async (req, res) => {
    const { url } = req.body;

    
    const apiKey = "af9682170e518afb6e3d96192acd3ead";
    const apiUrl = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&url=${url}&lang=en`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    res.send({
        polarity: data.score_tag,
        subjectivity: data.subjectivity,
        text: data.sentence_list[0]?.text || '',
    });
});


// Designates what port the app will listen to for incoming requests
app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
});


