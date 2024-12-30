// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // import useNavigate
// import axios from 'axios';

// const Signin = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate(); // Correct usage of useNavigate

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post('http://localhost:4000/api/admin/login', { email, password });
//       localStorage.setItem('token', data.token);
//       localStorage.setItem('role', data.role);
//       // Using navigate to redirect
//       navigate(data.role === 'admin' ? '/dashboard/admin' : '/dashboard/member');  // Updated routing path
//     } catch (err) {
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Sign In</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="form-control"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="form-control"
//         />
//         <button type="submit" className="btn btn-primary">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Signin;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Style/AdminSignup.css"; // Ensure this path is correct

const AdminSignin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:4000/api/admin/login', { email, password });
      localStorage.setItem('token', data.token);
      localStorage.setItem('role', data.role);
      navigate(data.role === 'admin' ? '/dashboard/admin' : '/dashboard/member');
    } catch (err) {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="signin-page">
      <div className="signin-card">
        <div className="signin-header">
          <h2>Library Management System</h2>
        </div>
        <form onSubmit={handleSubmit} className="signin-form">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminSignin;
