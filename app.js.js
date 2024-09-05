require('dotenv').config();
const express = require('express');
const cors = require('cors');
const tripRoutes = require('./routes/tripRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Trip Routes
app.get('/', (req, res) => {
    res.send("Jay shree Ram")
})


app.use('/api/trips', tripRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
