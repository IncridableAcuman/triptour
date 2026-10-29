const gallery = require('../data/gallery');

const getGallery = (req, res) => {
  try {
    res.json({
      success: true,
      data: gallery
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve gallery images',
      error: error.message
    });
  }
};

module.exports = {
  getGallery
};
