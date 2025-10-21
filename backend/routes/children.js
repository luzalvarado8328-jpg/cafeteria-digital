const express = require('express');
const router = express.Router();
const Child = require('../models/Child');

// Create child
router.post('/', async (req, res) => {
  try {
    const child = new Child(req.body);
    const saved = await child.save();
    res.status(201).json(saved);
  } catch (err) { res.status(400).json({ error: err.message }); }
});

// Get children (optionally filter by tutorId query param)
router.get('/', async (req, res) => {
  const filter = {};
  if (req.query.tutorId) filter.tutorId = req.query.tutorId;
  const children = await Child.find(filter);
  res.json(children);
});

// Get one child
router.get('/:id', async (req, res) => {
  const child = await Child.findById(req.params.id);
  res.json(child);
});

// Update child
router.put('/:id', async (req, res) => {
  const updated = await Child.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// Delete child
router.delete('/:id', async (req, res) => {
  await Child.findByIdAndDelete(req.params.id);
  res.json({ message: 'Child deleted' });
});

module.exports = router;