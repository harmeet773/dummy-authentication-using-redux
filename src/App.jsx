import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/navbar';
import Home from './pages/Home';
import About from './pages/About';
import Login from './components/Login.jsx';
import Profile from './components/Profile.jsx';

function App() {
  return (
    <Router basename="/your-repo-name"> {/* 👈 replace with your actual repo name */}
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
