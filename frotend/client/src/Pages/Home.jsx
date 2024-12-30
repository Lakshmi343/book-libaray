import React from "react";
import { Link } from "react-router-dom";
import "./home.css"; // Include custom CSS for background and text styling

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Library Management System</h1>
        <div className="home-buttons">
          <Link to="/signin" className="btn btn-light btn-lg mx-2">
            Sign In
          </Link>
          <Link to="/signup" className="btn btn-outline-light btn-lg mx-2">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

