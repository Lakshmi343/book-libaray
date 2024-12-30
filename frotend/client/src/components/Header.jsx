import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">
        Collage
        </Link>
        <div className="navbar-nav">
          <Link className="nav-item nav-link" to="/signin">
            Sign In
          </Link>
          <Link className="nav-item nav-link" to="/signup">
            Sign Up
          </Link>
          <Link className="nav-item nav-link" to="/dashboard@admin">
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
