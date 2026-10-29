const tours = require('../data/tours');

const getAllTours = (req, res) => {
  try {
    let result = [...tours];
    const { category, search, maxPrice } = req.query;

    if (category && category !== 'All') {
      result = result.filter(
        (tour) => tour.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (search && search.trim() !== '') {
      const q = search.trim().toLowerCase();
      result = result.filter(
        (tour) =>
          tour.name.toLowerCase().includes(q) ||
          tour.location.toLowerCase().includes(q) ||
          tour.country.toLowerCase().includes(q)
      );
    }

    if (maxPrice) {
      const max = Number(maxPrice);
      if (!isNaN(max)) {
        result = result.filter((tour) => tour.price <= max);
      }
    }

    res.json({
      success: true,
      count: result.length,
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve tours',
      error: error.message
    });
  }
};

const getTourById = (req, res) => {
  try {
    const { id } = req.params;
    const tour = tours.find((t) => t.id === id);

    if (!tour) {
      return res.status(404).json({
        success: false,
        message: `Tour package with ID ${id} not found`
      });
    }

    res.json({
      success: true,
      data: tour
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching tour details',
      error: error.message
    });
  }
};

const getTourCategories = (req, res) => {
  try {
    const rawCategories = tours.map((t) => t.category);
    const uniqueCategories = ['All', ...new Set(rawCategories)];

    res.json({
      success: true,
      data: uniqueCategories
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve tour categories',
      error: error.message
    });
  }
};

module.exports = {
  getAllTours,
  getTourById,
  getTourCategories
};
