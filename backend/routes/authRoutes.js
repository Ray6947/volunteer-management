const express = require('express');
const router = express.Router();
const User = require('../models/User');

// User Registration
router.post('/register', async (req, res) => {
  try {
    const { username, password, email, role } = req.body;
    const newUser = new User({ username, password, email, role });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error });
  }
});

module.exports = router;
