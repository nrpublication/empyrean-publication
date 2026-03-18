import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'; // Import the new Home page
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* We will create the Books page next */}
          <Route path="/books" element={<div>Books Page Coming Soon</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;