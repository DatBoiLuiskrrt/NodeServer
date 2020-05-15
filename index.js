const express = require("express");//npm i express
const shortid = require('shortid');

const server = express(); // npm i shortid

let hubs = [];

server.use(express.json()); // add this line

server.get('/hello', (req, res) => {
    
    res.status(200).json({ api: {
    "hello": "Web 27",
    }})
});

server.post("/api/hubs", (req,res) => {
    const hubInfo = req.body;
    // you validate the data from the user that they sent 
    hubInfo.id = shortid.generate();
    hubs.push(hubInfo);
    res.status(201).json(hubInfo);
});

//creater lessons

// write a GET /hllo endpoint that returns an 
// object like so: { hello: "Web 27" } 👇👇👇👇👊 

const PORT = 5000;
server.listen(PORT, () => console.log(`\n ** API on http://localhost:${PORT} **\n`));