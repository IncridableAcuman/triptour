const app = require('./app');

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`🚀 TripTour API Server is actively running on http://localhost:${PORT}`);
  console.log(`📍 Health Check: http://localhost:${PORT}/api/health`);
  console.log(`📍 Destinations: http://localhost:${PORT}/api/destinations`);
  console.log(`📍 Tours: http://localhost:${PORT}/api/tours`);
  console.log(`📍 Stats: http://localhost:${PORT}/api/stats`);
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully...');
  server.close(() => {
    console.log('Process terminated.');
  });
});

module.exports = server;
