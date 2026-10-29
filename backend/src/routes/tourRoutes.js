const express = require('express');
const router = express.Router();
const {
  getAllTours,
  getTourById,
  getTourCategories
} = require('../controllers/tourController');

router.get('/', getAllTours);
router.get('/categories', getTourCategories);
router.get('/:id', getTourById);

module.exports = router;
