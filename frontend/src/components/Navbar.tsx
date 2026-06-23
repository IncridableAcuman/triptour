import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useAppStore } from '../store/useAppStore'; // Zustand Store-ni ulash
import { Menu, X, Sun, Moon, Compass } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Zustand-dan global holatlar va funksiyalarni olamiz
  const { theme, lang, toggleTheme, setLanguage } = useAppStore();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.destinations'), path: '/destinations' },
    { name: t('nav.tours'), path: '/tours' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/70 dark:bg-dark/70 backdrop-blur-xl shadow-lg border-b border-gray-200/10 py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo (Premium Hover va Spin Animatsiyasi) */}
        <Link to="/" className="flex items-center space-x-2 text-2xl font-bold font-display tracking-tight text-dark dark:text-light group">
          <Compass className="w-8 h-8 text-primary transition-transform duration-700 group-hover:rotate-180" />
          <span className="tracking-wider">TRIP<span className="text-primary transition-colors group-hover:text-secondary">TOUR</span></span>
        </Link>

        {/* Desktop Navigatsiya Linklari */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`relative text-sm font-semibold tracking-wide transition-colors py-2 ${
                  isActive ? 'text-primary' : 'text-dark/80 dark:text-light/80 hover:text-primary dark:hover:text-primary'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div 
                    layoutId="activeNavIndicator" 
                    className="absolute bottom-0 left-0 w-full h-0.75 bg-linear-to-r from-primary to-secondary rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop Harakatlar paneli */}
        <div className="hidden md:flex items-center space-x-4">
          
          {/* Global Til almashtirgich (Zustand orqali) */}
          <div className="flex items-center space-x-1 bg-gray-100 dark:bg-slate-800 p-1 rounded-full border border-gray-200/10">
            {(['uz', 'en'] as const).map((lng) => (
              <button 
                key={lng}
                onClick={() => setLanguage(lng)} 
                className={`text-xs px-3 py-1.5 font-bold rounded-full transition-all uppercase ${
                  lang === lng ? 'bg-primary text-white shadow-md' : 'text-gray-400 hover:text-dark dark:hover:text-light'
                }`}
              >
                {lng}
              </button>
            ))}
          </div>

          {/* Global Dark/Light rejimi (Zustand orqali) */}
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme} 
            className="p-2.5 rounded-full bg-gray-100 dark:bg-slate-800 hover:bg-primary/10 transition-colors text-dark dark:text-light border border-gray-200/10 flex items-center justify-center"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
          </motion.button>

          {/* CTA Button */}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 bg-linear-to-r from-primary to-secondary text-white font-semibold rounded-full shadow-md hover:shadow-primary/30 transition-all duration-300"
          >
            {t('nav.bookNow')}
          </motion.button>
        </div>

        {/* Mobile menyu tugmalari */}
        <div className="flex items-center space-x-3 md:hidden">
          <button onClick={toggleTheme} className="p-2 text-dark dark:text-light">
            {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-dark dark:text-light transition-transform active:scale-90">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Silliq Slide va Fade Effekti) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: 'auto' }} 
            exit={{ opacity: 0, height: 0 }} 
            className="absolute top-20 left-0 w-full bg-white/95 dark:bg-dark/95 backdrop-blur-2xl px-6 py-8 flex flex-col space-y-6 shadow-xl border-b border-gray-200/10 md:hidden z-40 overflow-hidden"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                onClick={() => setIsOpen(false)} 
                className="text-xl font-semibold tracking-wide text-dark dark:text-light hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex justify-between items-center pt-4 border-t border-gray-200/10">
              <span className="text-sm font-medium opacity-60">{t('nav.languageLabel') || 'Language'}</span>
              <div className="flex space-x-2 bg-gray-100 dark:bg-slate-800 p-1 rounded-lg">
                {(['uz', 'en'] as const).map((lng) => (
                  <button 
                    key={lng}
                    onClick={() => { setLanguage(lng); setIsOpen(false); }} 
                    className={`px-3 py-1 rounded font-bold text-xs uppercase ${lang === lng ? 'bg-primary text-white' : 'text-gray-400'}`}
                  >
                    {lng}
                  </button>
                ))}
              </div>
            </div>
            
            <button className="w-full py-4 bg-linear-to-r from-primary to-secondary text-white font-semibold rounded-xl shadow-lg">
              {t('nav.bookNow')}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};