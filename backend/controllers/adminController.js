
 const Admin = require("../models/Admin"); 
 const jwt = require("jsonwebtoken");
 const bcrypt = require("bcrypt");

exports.registerAdmin = async (req, res) => {
  try {
    const { name, email, password, confirmPassword, phoneNumber } = req.body;
    console.log(req.body);
    // Validate input
    if (!name || !email || !password || !confirmPassword || !phoneNumber) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }
    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({message: "Admin with this email already exists"});
    }
    // Save admin
    const admin = await Admin.create({
      name,
      email,
      password, // Password will be hashed by the model's pre-save hook
      phoneNumber,
      role: "admin",
    });

    res.status(201).json({ message: "Admin registered successfully", admin });
  } catch (error) {
    console.error("Error during admin registration:", error.message);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};



exports.loginAdmin = async (req, res) => {
    try {
      const { email, password } = req.body;
      // Validate input
      if (!email || !password) {
        return res.status(400).json({message: "Email and password are required"});
      }
      // Check if admin exists
      const admin = await Admin.findOne({ email });
      if (!admin) {
        return res.status(404).json({ message: "Admin not found" });
      }
      // Verify password
      const isMatch = await bcrypt.compare(password, admin.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
      // Generate JWT
      const token = jwt.sign(
        { id: admin._id, role: admin.role },
        process.env.JWT_SECRET,
        { expiresIn: "1d" } // Token valid for 1 day
      );
      res.status(200).json({
        message: "Admin login successful",
        token,
        role: admin.role,
      });
    } catch (error) {
      console.error("Error during admin login:", error.message);
      res.status(500).json({ message: "Internal Server Error", error: error.message});
    }
  }