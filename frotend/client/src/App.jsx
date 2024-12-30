import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Home from './Pages/Home';
import AdminSignin from './Pages/AdminSignin';
import AdminSignup from './Pages/AdminSignup';
import AdminDashboard from './Pages/Dashboard/AdminDashboard';
import Footer from './components/Footer';
import CreateBook from './Pages/Book/CreateBook';
import Book from './Pages/Book/Books';

function App() {
  return (
    <>
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Admin Routes */}
          <Route path="/adminregister" element={<AdminSignup />} />
          <Route path="/adminlogin" element={<AdminSignin />} />
          <Route path="/dashboard/admin" element={<AdminDashboard />} />
          <Route path='/createBook' element={<CreateBook/>}/>
          <Route path='/books' element={<Book/>}/>
        </Routes>
      </div>
      <Footer/>
    </Router>
    
     </>
  );
}

export default App;
