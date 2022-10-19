const mongoose = require('mongoose');
require('dotenv').config({ path: 'MONGO_URI' });

const MONGO_URI = 'mongodb://mongo:27017/test';

const options = {
  autoIndex: false, // Don't build indexes
  reconnectTries: 30, // Retry up to 30 times
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0,
};

const connectDB = async () => {
  const conn = await mongoose.connect(MONGO_URI, options);

  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;
