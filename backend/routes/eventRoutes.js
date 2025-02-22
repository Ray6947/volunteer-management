const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

// Create Event (Organizations only)
router.post('/events', async (req, res) => {
  try {
    const { title, description, date, location, createdBy } = req.body;
    const newEvent = new Event({ title, description, date, location, createdBy });
    await newEvent.save();
    res.status(201).json({ message: 'Event created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating event', error });
  }
});

// Get All Events
router.get('/events', async (req, res) => {
  try {
    const events = await Event.find().populate('createdBy', 'username').populate('volunteers', 'username');
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching events', error });
  }
});

module.exports = router;
