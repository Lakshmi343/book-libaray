const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String,
        required: true,
        unique: true 
    },
    password: { 
        type: String, 
        required: true
    },
    phoneNumber: { 
        type: String, 
        required: true 
    },
    role: { 
        type: String, 
        required: true 
    },
    
    // New fields for library member registration
    membershipType: { // Indicates the type of library membership (Standard or Premium)
        type: String,
        required: true,
        enum: ['Standard', 'Premium'],
        default: 'Standard'
    },
    membershipStartDate: { // The date when the user became a member
        type: Date,
        required: true,
        default: Date.now
    },
    membershipExpiryDate: { // The date when the membership expires
        type: Date,
        required: true
    },
    borrowedBooks: [{ // List of books currently borrowed by the user
        bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' }, // Reference to the Book model
        borrowDate: { type: Date, default: Date.now }, // Date when the book was borrowed
        returnDate: { type: Date } // Date when the book is returned
    }],
    address: { // User's address for communication and registration purposes
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        postalCode: { type: String, required: true }
    },
    emergencyContact: { // Emergency contact information for the user
        name: { type: String, required: true },
        phone: { type: String, required: true }
    },
    profilePicture: { // URL or file path for the user's profile picture (optional)
        type: String,
        default: 'default-profile.jpg'
    }
});

// Pre-save middleware to hash password
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
