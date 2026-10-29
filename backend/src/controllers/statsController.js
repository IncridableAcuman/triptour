const stats = require('../data/stats');

const getStats = (req, res) => {
  try {
    res.json({
      success: true,
      data: stats
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve stats',
      error: error.message
    });
  }
};

module.exports = {
  getStats
};
