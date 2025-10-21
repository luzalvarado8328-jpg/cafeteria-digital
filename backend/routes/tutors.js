const express = require('express');
const router = express.Router();
const Tutor = require('../models/Tutor');

// Create tutor
router.post('/', async (req, res) => {
  try {
    const tutor = new Tutor(req.body);
    const saved = await tutor.save();
    res.status(201).json(saved);
  } catch (err) { res.status(400).json({ error: err.message }); }
});

// Read all tutors
router.get('/', async (req, res) => {
  const tutors = await Tutor.find();
  res.json(tutors);
});

// Read one tutor
router.get('/:id', async (req, res) => {
  const tutor = await Tutor.findById(req.params.id);
  res.json(tutor);
});

// Update tutor
router.put('/:id', async (req, res) => {
  const updated = await Tutor.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// Delete tutor
router.delete('/:id', async (req, res) => {
  await Tutor.findByIdAndDelete(req.params.id);
  res.json({ message: 'Tutor deleted' });
});

module.exports = router;