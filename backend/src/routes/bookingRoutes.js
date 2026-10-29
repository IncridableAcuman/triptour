const express = require('express');
const router = express.Router();
const {
  createBooking,
  getAllBookings
} = require('../controllers/bookingController');

router.post('/', createBooking);
router.get('/', getAllBookings);

module.exports = router;
