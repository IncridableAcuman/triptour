const destinations = require('../data/destinations');

const getAllDestinations = (req, res) => {
  try {
    let result = [...destinations];
    const { category, search, maxPrice } = req.query;

    if (category && category !== 'All') {
      result = result.filter(
        (dest) => dest.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (search && search.trim() !== '') {
      const q = search.trim().toLowerCase();
      result = result.filter(
        (dest) =>
          dest.title.toLowerCase().includes(q) ||
          dest.country.toLowerCase().includes(q) ||
          dest.location.toLowerCase().includes(q)
      );
    }

    if (maxPrice) {
      const max = Number(maxPrice);
      if (!isNaN(max)) {
        result = result.filter((dest) => dest.price <= max);
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
      message: 'Failed to retrieve destinations',
      error: error.message
    });
  }
};

const getDestinationById = (req, res) => {
  try {
    const { id } = req.params;
    const destination = destinations.find((d) => d.id === id);

    if (!destination) {
      return res.status(404).json({
        success: false,
        message: `Destination with ID ${id} not found`
      });
    }

    res.json({
      success: true,
      data: destination
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching destination details',
      error: error.message
    });
  }
};

const getCategories = (req, res) => {
  try {
    const rawCategories = destinations.map((d) => d.category);
    const uniqueCategories = ['All', ...new Set(rawCategories)];

    res.json({
      success: true,
      data: uniqueCategories
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve categories',
      error: error.message
    });
  }
};

module.exports = {
  getAllDestinations,
  getDestinationById,
  getCategories
};
