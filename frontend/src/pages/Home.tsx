import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, Star, Heart, MapPin } from 'lucide-react';
import CountUp from 'react-countup';
import { fadeInUp, staggerContainer, hoverCardEffect } from '../animation/variants'

import 'swiper/css';
import 'swiper/css/pagination';

export const Home: React.FC = () => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const toggleFav = (id: string) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);
  };

  const sampleDestinations = [
    { id: '1', title: 'Paris Eternal', country: 'France', rating: 4.9, price: 1290, image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80' },
    { id: '2', title: 'Futuristic Dubai', country: 'UAE', rating: 4.8, price: 1850, image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80' },
    { id: '3', title: 'Mystical Bali', country: 'Indonesia', rating: 4.9, price: 850, image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80' },
  ];

  return (
    <div className="bg-light dark:bg-dark text-dark dark:text-light overflow-x-hidden">
      
      {/* 1. HERO SECTION WITH LUXURY VIDEO/GRADIENT BACKGROUND */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-dark/50 to-dark z-10" />
        <img 
          src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1920&q=80" 
          className="absolute inset-0 w-full h-full object-cover scale-105 animate-pulse-slow" 
          alt="Luxury background"
        />

        {/* Floating Clouds Animation Accent */}
        <motion.div 
          animate={{ x: ['-10%', '110%'] }} 
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-0 w-96 h-20 bg-white/5 blur-3xl rounded-full z-10 pointer-events-none"
        />

        <div className="relative max-w-5xl mx-auto px-6 text-center z-20 mt-12">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold font-display text-white mb-6 leading-tight"
          >
            Explore The World With <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">Trip Tour</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-light/90 max-w-2xl mx-auto mb-12 font-sans"
          >
            Discover unforgettable premium adventures and customized dream destinations designed exclusively for you.
          </motion.p>

          {/* Premium Search Engine Form Component Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
            className="w-full bg-white/10 dark:bg-dark/40 backdrop-blur-2xl p-4 md:p-6 rounded-3xl border border-white/20 shadow-2xl grid grid-cols-1 md:grid-cols-4 gap-4 text-left"
          >
            <div className="flex flex-col space-y-1.5 p-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-white/70">Location</label>
              <div className="flex items-center space-x-2 text-white">
                <MapPin className="w-5 h-5 text-primary" />
                <input type="text" placeholder="Where to go?" className="bg-transparent border-none outline-none text-white placeholder-white/50 w-full text-sm" />
              </div>
            </div>
            <div className="flex flex-col space-y-1.5 p-2 border-t md:border-t-0 md:border-l border-white/10">
              <label className="text-xs font-semibold uppercase tracking-wider text-white/70">Date</label>
              <input type="date" className="bg-transparent border-none outline-none text-white text-sm w-full" />
            </div>
            <div className="flex flex-col space-y-1.5 p-2 border-t md:border-t-0 md:border-l border-white/10">
              <label className="text-xs font-semibold uppercase tracking-wider text-white/70">Type</label>
              <select className="bg-transparent border-none outline-none text-white text-sm w-full">
                <option className="text-dark">All Packages</option>
                <option className="text-dark">Luxury & Spa</option>
                <option className="text-dark">Adventure</option>
              </select>
            </div>
            <button className="w-full h-full min-h-13.5 bg-linear-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-bold rounded-2xl flex items-center justify-center space-x-2 transition-all shadow-lg shadow-primary/20 transform active:scale-95">
              <Search className="w-5 h-5" />
              <span>Explore Now</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. POPULAR DESTINATIONS SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div>
            <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-2">Top Escapes</span>
            <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight">Popular Destinations</h2>
          </div>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {sampleDestinations.map((dest) => (
            <motion.div 
              key={dest.id}
              variants={fadeInUp()}
              whileHover={hoverCardEffect}
              className="interactive-card bg-white dark:bg-dark-light rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-white/5 relative group cursor-pointer"
            >
              <div className="relative h-72 overflow-hidden">
                <img src={dest.image} alt={dest.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <button 
                  onClick={(e) => { e.stopPropagation(); toggleFav(dest.id); }}
                  className="absolute top-4 right-4 p-3 rounded-full bg-white/80 dark:bg-dark/80 backdrop-blur-md shadow-md hover:bg-white transition-colors"
                >
                  <Heart className={`w-5 h-5 transition-colors ${favorites.includes(dest.id) ? 'fill-accent text-accent' : 'text-dark dark:text-light'}`} />
                </button>
                <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-dark/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                  <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                  <span>{dest.rating}</span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs text-primary font-bold tracking-wider uppercase mb-1 block">{dest.country}</span>
                <h3 className="text-xl font-bold mb-4">{dest.title}</h3>
                <div className="flex justify-between items-center border-t border-gray-100 dark:border-white/5 pt-4">
                  <span className="text-sm text-gray-400">From package</span>
                  <span className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">${dest.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. CORE STATISTICS WITH REAL-TIME COUNTERS */}
      <section ref={statsRef} className="py-20 bg-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-primary/10 to-secondary/10 opacity-30" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10 text-center">
          {[
            { value: 50, suffix: 'K+', label: 'Happy Travelers' },
            { value: 120, suffix: '+', label: 'Premium Destinations' },
            { value: 10, suffix: 'K+', label: 'Top Reviews' },
            { value: 15, suffix: '', label: 'Years Experience' }
          ].map((stat, i) => (
            <div key={i} className="p-4">
              <h3 className="text-4xl md:text-6xl font-bold font-display mb-2 text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                {statsInView ? <CountUp end={stat.value} duration={3.5} /> : '0'}{stat.suffix}
              </h3>
              <p className="text-sm md:text-base text-gray-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PREMIUM COMPREHENSIVE PINTEREST MASONRY GALLERY */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm">Visual Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mt-2">Shared Moments</h2>
        </div>
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {[
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80'
          ].map((imgSrc, idx) => (
            <motion.div 
              key={idx}
              className="break-inside-avoid relative rounded-3xl overflow-hidden group shadow-md cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <img src={imgSrc} alt="Gallery item" className="w-full object-cover rounded-3xl" />
              <div className="absolute inset-0 bg-dark/40 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-semibold tracking-wider uppercase bg-primary/80 px-4 py-2 rounded-full">View Escape</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};