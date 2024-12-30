const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db");
const adminRoutes = require("./routes/adminRoutes");
const userRoutes = require("./routes/userRoutes")
const bookRoutes=require("./routes/bookRoutes")

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Debug Middleware
app.use((req, res, next) => {
  console.log("Request Method:", req.method);
  console.log("Request Body:", req.body);
  console.log("Request Headers:", req.headers);
  next();
});

// Register admin routes with the correct base path
app.use("/api/admin", adminRoutes);

// regisrer and login route for user
app.use("/api/user",userRoutes);

//book crud
app.use("/api/book",bookRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
