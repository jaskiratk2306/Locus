import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ExploreMap from './pages/ExploreMap';
import About from './pages/About';
import Contact from './pages/Contact';
import './index.css';

function App() {
  return (
    <Router>
      <div className="bg-brand-bg min-h-screen font-sans text-brand-dark">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<ExploreMap />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Auth routes will be added in Phase 3 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
