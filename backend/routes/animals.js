const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all animals
router.get('/', async(req, res) => {
    const [rows] = await db.query('SELECT * FROM animals');
    res.json(rows);
});

// Add a new animal
router.post('/', async(req, res) => {
    const { name, species, birthDate, vaccines, weight, height } = req.body;
    await db.query(
        'INSERT INTO animals (name, species, birthDate, vaccines, weight, height) VALUES (?, ?, ?, ?, ?, ?)', [name, species, birthDate, vaccines, weight, height]
    );
    res.sendStatus(201);
});

// Delete an animal
router.delete('/:id', async(req, res) => {
    const { id } = req.params;
    await db.query('DELETE FROM animals WHERE id = ?', [id]);
    res.sendStatus(200);
});

module.exports = router;