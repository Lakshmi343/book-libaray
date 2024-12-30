
import React from "react";


import AdminSidebar from "./AdminSidebar";

const AdminDashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
      
      <AdminSidebar/> 
        <main className="col-md-10 ml-sm-auto px-4">
          <div className="d-flex flex-column align-items-start">
            <h1 className="mt-3">Admin Dashboard</h1>
            <p>Welcome, Admin!</p>
          </div>

          <div className="row mt-4">
            <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
              <div className="card text-white bg-primary">
                <div className="card-body">
                  <h5 className="card-title">13 Students</h5>
                  <p className="card-text">Total Registered Students</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
              <div className="card text-white bg-success">
                <div className="card-body">
                  <h5 className="card-title">0 Distinct Books</h5>
                  <p className="card-text">Unique Books in the Library</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
              <div className="card text-white bg-info">
                <div className="card-body">
                  <h5 className="card-title">0 Total Books</h5>
                  <p className="card-text">Books Currently Available</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
              <div className="card text-white bg-danger">
                <div className="card-body">
                  <h5 className="card-title">0 Overdue Books</h5>
                  <p className="card-text">Books Not Returned on Time</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
