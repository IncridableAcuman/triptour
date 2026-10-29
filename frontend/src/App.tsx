import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useAppStore } from './store/useAppStore';
import { Navbar } from './components/Navbar';
import { BookingModal } from './components/BookingModal';
import { AnimatedCursor } from './components/AnimatedCursor';

import { Home } from './pages/Home';
import { Destinations } from './pages/Destinations';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Tours } from './pages/Tours';

// Har bir marshrut o'zgarganda sahifa tepasiga o'tkazish
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const { theme } = useAppStore();

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return (
    <Router>
      <ScrollToTop />
      <AnimatedCursor />
      <div className="relative min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 overflow-x-hidden transition-colors duration-300">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <BookingModal />
        <ToastContainer
          position="bottom-right"
          theme={theme === 'dark' ? 'dark' : 'light'}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
        />
      </div>
    </Router>
  );
}

export default App;
