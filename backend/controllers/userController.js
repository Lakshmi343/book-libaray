
// const User = require('../models/User.js');
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// // Register User
// exports.registerUser = async (req, res) => {
//     try {
//         const { name, email, password, confirmPassword, phoneNumber, role } = req.body;

//         if (!name || !email || !password || !confirmPassword || !phoneNumber || !role) {
//             return res.status(400).json({ message: "All fields are required" });
//         }

//         if (password !== confirmPassword) {
//             return res.status(400).json({ message: "Passwords do not match" });
//         }

//         const existingUser = await User.findOne({ email });
//         if (existingUser) {
//             return res.status(400).json({ message: "Email already exists" });
//         }

//         const user = await User.create({ name, email, password, phoneNumber, role });
//         return res.status(201).json({ message: "User registered successfully", user });
//     } catch (error) {
//         console.error("Error during registration:", error.message);
//         res.status(500).json({ message: "Internal Server Error", error: error.message });
//     }
// };


// exports.loginUser = async (req, res) => {

//     const { email, password } = req.body;
//     try {
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(400).json({ message: "Invalid credentials" });
//         }

//         const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
//             expiresIn: "1d",
//         });

//         res.status(200).json({ message: "Login successful", token, role: user.role });
//     } catch (error) {
//         res.status(500).json({ message: "Error logging in", error });
//     }
    
// };



const User = require('../models/User.js');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Register User
exports.registerUser = async (req, res) => {
    try {
        const { 
            name, 
            email, 
            password, 
            confirmPassword, 
            phoneNumber, 
            role,
            membershipType,
            address,
            emergencyContact 
        } = req.body;

        // Ensure all fields are provided
        if (!name || !email || !password || !confirmPassword || !phoneNumber || !role || !address || !emergencyContact) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" });
        }

        // Calculate membership expiry date based on the membership type
        let membershipExpiryDate = new Date();
        if (membershipType === 'Premium') {
            membershipExpiryDate.setFullYear(membershipExpiryDate.getFullYear() + 2); // Premium members get 2 years
        } else {
            membershipExpiryDate.setFullYear(membershipExpiryDate.getFullYear() + 1); // Standard members get 1 year
        }

        // Create a new user (library member)
        const user = new User({
            name,
            email,
            password,
            phoneNumber,
            role,
            membershipType,
            membershipStartDate: Date.now(),
            membershipExpiryDate,
            address,
            emergencyContact
        });

        // Hash the password before saving the user
        await user.save();

        res.status(201).json({ message: "User registered successfully", user });
    } catch (error) {
        console.error("Error during registration:", error.message);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};



// login member
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Compare the password entered with the hashed password in the database
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Generate a token with user id and role as payload, valid for 1 day
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });

        // Send back the token, success message, and user role
        res.status(200).json({ message: "Login successful", token, role: user.role });
    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ message: "Error logging in", error: error.message });
    }
};
