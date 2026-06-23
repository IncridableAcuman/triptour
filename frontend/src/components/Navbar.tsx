import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useAppStore } from '../store/useAppStore'; 
import { Menu, X, Sun, Moon, Compass } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Zustand store elementlari
  const theme = useAppStore((state) => state.theme);
  const lang = useAppStore((state) => state.lang);
  const toggleTheme = useAppStore((state) => state.toggleTheme);
  const setLanguage = useAppStore((state) => state.setLanguage);

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
        ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-lg border-b border-slate-200/50 dark:border-slate-800/50 py-4' 
        : 'bg-white/40 dark:bg-slate-950/40 backdrop-blur-md border-b border-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white group">
          <Compass className="w-8 h-8 text-sky-500 transition-transform duration-700 group-hover:rotate-180" />
          <span className="tracking-wider">TRIP<span className="text-sky-500 transition-colors group-hover:text-cyan-400">TOUR</span></span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`relative text-sm font-bold tracking-wide transition-colors py-2 ${
                  isActive 
                    ? 'text-sky-500' 
                    : 'text-slate-700 hover:text-sky-500 dark:text-slate-200 dark:hover:text-sky-400'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div 
                    layoutId="activeNavIndicator" 
                    className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          
          {/* Language Controller */}
          <div className="flex items-center space-x-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-full border border-slate-200/60 dark:border-slate-700/60">
            {(['uz', 'en'] as const).map((lng) => (
              <button 
                key={lng}
                onClick={() => setLanguage(lng)} 
                className={`text-xs px-3 py-1.5 font-bold rounded-full transition-all uppercase ${
                  lang === lng 
                    ? 'bg-sky-500 text-white shadow-md' 
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {lng}
              </button>
            ))}
          </div>

          {/* Theme Toggle */}
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={() => toggleTheme()} 
            className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-sky-500/10 transition-colors text-slate-800 dark:text-white border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-center"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
          </motion.button>

          {/* CTA Button */}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold rounded-full shadow-md hover:shadow-sky-500/20 transition-all duration-300"
          >
            {t('nav.bookNow') || 'Book Now'}
          </motion.button>
        </div>

        {/* Mobile menu buttons */}
        <div className="flex items-center space-x-3 md:hidden">
          <button onClick={() => toggleTheme()} className="p-2 text-slate-800 dark:text-white" aria-label="Toggle theme">
            {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-800 dark:text-white transition-transform active:scale-90">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: 'auto' }} 
            exit={{ opacity: 0, height: 0 }} 
            className="absolute top-20 left-0 w-full bg-white dark:bg-slate-900 px-6 py-8 flex flex-col space-y-6 shadow-xl border-b border-slate-200 dark:border-slate-800 md:hidden z-40 overflow-hidden"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                onClick={() => setIsOpen(false)} 
                className="text-xl font-semibold tracking-wide text-slate-900 dark:text-white hover:text-sky-500 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex justify-between items-center pt-4 border-t border-slate-200 dark:border-slate-800">
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{t('nav.languageLabel') || 'Language'}</span>
              <div className="flex space-x-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
                {(['uz', 'en'] as const).map((lng) => (
                  <button 
                    key={lng}
                    onClick={() => { setLanguage(lng); setIsOpen(false); }} 
                    className={`px-3 py-1 rounded font-bold text-xs uppercase ${lang === lng ? 'bg-sky-500 text-white' : 'text-slate-500'}`}
                  >
                    {lng}
                  </button>
                ))}
              </div>
            </div>
            
            <button className="w-full py-4 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold rounded-xl shadow-lg">
              {t('nav.bookNow') || 'Book Now'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};