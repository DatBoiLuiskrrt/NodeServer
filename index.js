const express = require("express");

const server = express();

server.get('/hello', (req, res) => {
    res.status(200).json({ api: {hello: "Web 27"}})
})
const PORT = 5000;
server.listen(PORT, () => console.log(`\n ** API on http://localhost:${PORT} **\n`));