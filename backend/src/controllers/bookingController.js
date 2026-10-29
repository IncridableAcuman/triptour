const { bookings } = require('../data/store');

const createBooking = (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      itemTitle,
      itemType,
      date,
      guests,
      notes
    } = req.body;

    if (!fullName || fullName.trim().length < 2) {
      return res.status(400).json({
        success: false,
        message: 'Full name must be at least 2 characters'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    if (!phone || phone.trim().length < 5) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid phone number'
      });
    }

    const newBooking = {
      id: `booking_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
      bookingReference: `TRIP-${Math.floor(100000 + Math.random() * 900000)}`,
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      itemTitle: itemTitle || 'General Custom Experience',
      itemType: itemType || 'tour',
      date: date || new Date().toISOString().split('T')[0],
      guests: Number(guests) || 1,
      notes: notes ? notes.trim() : '',
      status: 'confirmed',
      createdAt: new Date().toISOString()
    };

    bookings.push(newBooking);

    res.status(201).json({
      success: true,
      message: 'Booking created successfully! Our concierge will contact you with itinerary details.',
      data: newBooking
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to process booking reservation',
      error: error.message
    });
  }
};

const getAllBookings = (req, res) => {
  res.json({
    success: true,
    count: bookings.length,
    data: bookings
  });
};

module.exports = {
  createBooking,
  getAllBookings
};
