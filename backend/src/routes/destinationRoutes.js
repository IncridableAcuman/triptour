const express = require('express');
const router = express.Router();
const {
  getAllDestinations,
  getDestinationById,
  getCategories
} = require('../controllers/destinationController');

router.get('/', getAllDestinations);
router.get('/categories', getCategories);
router.get('/:id', getDestinationById);

module.exports = router;
