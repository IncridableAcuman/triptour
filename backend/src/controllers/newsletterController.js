const { subscribers } = require('../data/store');

const subscribe = (req, res) => {
  try {
    const { email } = req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email address'
      });
    }

    const cleanEmail = email.trim().toLowerCase();

    if (subscribers.includes(cleanEmail)) {
      return res.status(200).json({
        success: true,
        message: 'You are already a member of the Secret Escape Club!'
      });
    }

    subscribers.push(cleanEmail);

    res.status(201).json({
      success: true,
      message: 'Welcome to the Secret Escape Club! Check your inbox for exclusive perks.'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to process newsletter subscription',
      error: error.message
    });
  }
};

module.exports = {
  subscribe
};
