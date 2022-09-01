const mongoose = require("mongoose");
// const { connect } = require("../Routes/bootcamps");
const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URL);
  console.log(`mongoDB connect:${conn.connection.host}`);
};

module.exports = connectDB;
