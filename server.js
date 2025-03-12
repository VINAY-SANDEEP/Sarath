const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// Endpoint to receive user data and call ML model
app.post('/predict', async (req, res) => {
    try {
        const { featureData } = req.body;
        const mlResponse = await axios.post('http://127.0.0.1:5000/predict', { featureData });
        res.json(mlResponse.data);
    } catch (error) {
        res.status(500).json({ message: "Error in ML prediction", error });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));
