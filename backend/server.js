const express = require('express');
const cors = require('cors');
const animalRoutes = require('./routes/animals');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/animals', animalRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});