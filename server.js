const express = require('express');
const app = express();
const port = 3000;

// Simple route to generate fake coins
app.get('/generate-coins', (req, res) => {
    const uid = req.query.uid; // Get UID from the query parameter
    if (uid) {
        // Fake coin generation (random between 1000 and 5000)
        const fakeCoins = Math.floor(Math.random() * 5000) + 1000;
        res.json({ coins: fakeCoins });
    } else {
        res.status(400).json({ error: "UID is required." });
    }
});

// Serve static assets (coin images, etc.)
app.use(express.static('assets'));

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
