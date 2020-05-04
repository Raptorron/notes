const db = require('./db');

const User = require('./models/User');

const syncAndSeed = require('./syncAndSeed');

// Associations go here

module.exports = {
  syncAndSeed,
  db,
  models: {
    User
  }
};
