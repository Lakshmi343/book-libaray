// Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const AdminSidebar = () => {
  return (
    <nav className="col-md-2 d-none d-md-block bg-dark sidebar">
      <div className="sidebar-sticky p-3">
        <h5 className="text-light text-center">Library Management</h5>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/dashboard">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/activities">Activities</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white dropdown-toggle" data-bs-toggle="dropdown" href="#">
              Books
            </a>
            <ul className="dropdown-menu bg-light">
              <li><Link className="dropdown-item" to="/books">All Books</Link></li>
              <li><Link className="dropdown-item" to="/createBook">Add Book</Link></li>
              <li><Link className="dropdown-item" to="/editBook">Edit Book</Link></li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/currentBooks">My Current Books</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/previousBooks">My Previous Books</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/rules">Rules & Regulations</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/profile">My Profile</Link>
          </li>
        </ul>
        <button className="btn btn-danger mt-4 w-100">Logout</button>
      </div>
    </nav>
  );
};

export default AdminSidebar;
