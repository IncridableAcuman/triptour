import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Destinations } from './pages/Destinations'; // Qo'shildi
import { About } from './pages/About';               // Qo'shildi
import { Contact } from './pages/Contact';
import { Tours } from './pages/Tours';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white overflow-x-hidden">
        {/* Global Komponentlar */}
        <Navbar />

        {/* Sahifalar Routing Tizimi */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/tours' element={<Tours/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;