import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAppStore } from './store/useAppStore'; 
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Destinations } from './pages/Destinations';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Tours } from './pages/Tours';

function App() {
  const { theme } = useAppStore();

  useEffect(() => {
    const root = window.document.documentElement; // <html> elementi
    
    // Konsolda nima o'zgarayotganini ko'rish uchun:
    console.log("Joriy rejim:", theme);

    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return (
    <Router>
      {/* Agar bg-light yoki bg-dark ranglaringiz ishlamayotgan bo'lsa, 
          tekshirish uchun vaqtinchalik bg-slate-100 dark:bg-slate-900 qilib ko'ring */}
      <div className="relative min-h-screen bg-light dark:bg-dark text-slate-900 dark:text-slate-100 overflow-x-hidden transition-colors duration-300">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tours" element={<Tours />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;