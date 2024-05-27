const mongoose = require('mongoose');
require('dotenv').config();

const dbConfig = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Database connected');
  } catch (err) {
    console.error('Database connection error', err);
  }
};

module.exports = dbConfig;
