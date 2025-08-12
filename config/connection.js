const mongoose = require("mongoose");

const connectedDB = async () => {
  try {
    await mongoose.connect(process.env.Mongo_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`✅ Database Connected :: ${mongoose.connection.host}`.bgYellow);
  } catch (error) {
    console.error(`❌ Database Connection Failed: ${error.message}`.red);
    process.exit(1); 
  }
};

module.exports = connectedDB;
