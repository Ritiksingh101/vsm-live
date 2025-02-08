const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

app.get("/api/feed", async (req, res) => {
    try {
        const response = await axios.get("https://admin.vedscienceandmaths.com/feed");
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(4000, () => console.log("Proxy Server Running on Port 4000"));
