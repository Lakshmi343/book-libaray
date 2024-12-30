// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate

// const AdminSignup = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '', phoneNumber: '' });
//   const navigate = useNavigate(); // Initialize navigate

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post('http://localhost:4000/api/admin/register', formData);
//       alert(data.message);
//       // Redirect to AdminSignin after successful signup
//       navigate('/adminsignin');
//     } catch (err) {
//       alert('Error during registration');
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange} className="form-control" />
//         <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} className="form-control" />
//         <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} className="form-control" />
//         <input type="password" placeholder="Confirm Password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="form-control" />
//         <input type="text" placeholder="Phone Number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="form-control" />
//         <button type="submit" className="btn btn-primary">Register</button>
//       </form>
//     </div>
//   );
// };

// export default AdminSignup;


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Style/AdminSignup.css"

const AdminSignup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '', phoneNumber: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:4000/api/admin/register', formData);
      alert(data.message);
      navigate('/adminsignin');
    } catch (err) {
      alert('Error during registration');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Library Management System</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Confirm Password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Phone Number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">Register</button>
        </form>
      </div>
    </div>
  );
};

export default AdminSignup;

