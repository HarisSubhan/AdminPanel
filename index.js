const express = require("express");
const connectedDB = require("./config/connection");
const cors = require("cors");
require("dotenv").config();
require("colors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// DB Connection
connectedDB();

// Routes
app.use("/api/users", require("./routes/userRoutes"));

// Start Server
app.listen(process.env.PORT, () => {
  console.log(`🚀 Server started on port: ${process.env.PORT}`.bgBlue);
});
