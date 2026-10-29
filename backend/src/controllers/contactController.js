const { contacts } = require('../data/store');

const createContact = (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || name.trim().length < 2) {
      return res.status(400).json({
        success: false,
        message: 'Name must be at least 2 characters long'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    if (!message || message.trim().length < 10) {
      return res.status(400).json({
        success: false,
        message: 'Message must be at least 10 characters long'
      });
    }

    const newContact = {
      id: `contact_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
      createdAt: new Date().toISOString()
    };

    contacts.push(newContact);

    res.status(201).json({
      success: true,
      message: 'Your message has been received! Our concierge team will reach out shortly.',
      data: newContact
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to process contact message',
      error: error.message
    });
  }
};

const getAllContacts = (req, res) => {
  res.json({
    success: true,
    count: contacts.length,
    data: contacts
  });
};

module.exports = {
  createContact,
  getAllContacts
};
