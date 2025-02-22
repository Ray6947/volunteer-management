const express = require('express');
const router = express.Router();
const VolunteerHours = require('../models/VolunteerHours');

// Log Volunteer Hours
router.post('/volunteer-hours', async (req, res) => {
  try {
    const { userId, eventId, hours } = req.body;
    const newVolunteerHours = new VolunteerHours({ userId, eventId, hours });
    await newVolunteerHours.save();
    res.status(201).json({ message: 'Volunteer hours logged successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error logging volunteer hours', error });
  }
});

module.exports = router;
