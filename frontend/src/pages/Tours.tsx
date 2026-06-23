import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlidersHorizontal, Search, Star, Clock, Compass, AlertCircle } from 'lucide-react';

// Premium animatsiya variantlari
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
};

// Mock ma'lumotlarni alohida saqlaymiz (kelajakda API bilan almashtirish oson bo'ladi)
const TOURS_DATA = [
  { id: '1', name: 'Swiss Alps Grand Tour', category: 'Mountain', price: 2100, rating: 4.9, duration: '7 Days', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', location: 'Switzerland' },
  { id: '2', name: 'Maldives Overwater Bungalow', category: 'Beach', price: 2450, rating: 5.0, duration: '5 Days', image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=600&q=80', location: 'Maldives' },
  { id: '3', name: 'Kyoto Temple Trails', category: 'Cultural', price: 1350, rating: 4.8, duration: '9 Days', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80', location: 'Japan' },
  { id: '4', name: 'Grand Canyon Helicopter Flyover', category: 'Adventure', price: 1800, rating: 4.7, duration: '3 Days', image: 'https://images.unsplash.com/photo-1615551043360-33de8b5f410c?auto=format&fit=crop&w=600&q=80', location: 'USA' },
];

export const Tours: React.FC = () => {
  const [search, setSearch] = useState('');
  const [maxPrice, setMaxPrice] = useState(3000);
  const [category, setCategory] = useState('All');

  // Filtrlash mexanizmi optimizatsiyasi
  const filteredTours = useMemo(() => {
    return TOURS_DATA.filter(tour => 
      tour.name.toLowerCase().includes(search.toLowerCase()) &&
      tour.price <= maxPrice &&
      (category === 'All' || tour.category === category)
    );
  }, [search, maxPrice, category]);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-light dark:bg-dark text-dark dark:text-light transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Sarlavha qismi */}
        <div className="mb-12">
          <span className="text-primary font-bold text-sm uppercase tracking-widest block mb-2">Luxury Packages</span>
          <h1 className="text-4xl md:text-5xl font-extrabold font-display bg-gradient-to-r from-dark to-gray-500 dark:from-light dark:to-gray-400 bg-clip-text text-transparent">
            Find Your Premium Tour
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
          
          {/* 1. Mukammal Glassmorphism Filtrlar Paneli */}
          <div className="bg-white/80 dark:bg-dark-light/80 backdrop-blur-xl p-6 rounded-3xl shadow-xl border border-gray-100 dark:border-white/5 sticky top-28 z-10">
            <div className="flex items-center space-x-2 font-bold mb-6 pb-4 border-b border-gray-100 dark:border-white/5">
              <SlidersHorizontal className="w-5 h-5 text-primary" />
              <span className="text-lg">Filter Options</span>
            </div>

            <div className="space-y-6">
              {/* Qidiruv input */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider block mb-2 text-gray-400 dark:text-gray-500">Search Destination</label>
                <div className="relative">
                  <input 
                    type="text" 
                    value={search} 
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Where do you want to go?"
                    className="w-full bg-light dark:bg-dark p-3 pl-10 rounded-xl outline-none focus:ring-2 focus:ring-primary/40 border border-transparent focus:border-primary/20 text-sm transition-all"
                  />
                  <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                </div>
              </div>

              {/* Narx Filteri */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">Max Budget</label>
                  <span className="text-sm font-bold text-primary">${maxPrice}</span>
                </div>
                <input 
                  type="range" 
                  min="1000" 
                  max="3000" 
                  step="50"
                  value={maxPrice} 
                  onChange={e => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-primary bg-gray-200 dark:bg-dark h-2 rounded-lg cursor-pointer transition-all"
                />
              </div>

              {/* Kategoriyalar */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider block mb-3 text-gray-400 dark:text-gray-500">Category</label>
                <div className="flex flex-col space-y-1.5">
                  {['All', 'Beach', 'Mountain', 'Cultural', 'Adventure'].map(cat => (
                    <button 
                      key={cat} 
                      onClick={() => setCategory(cat)}
                      className={`text-left text-sm py-2.5 px-4 rounded-xl font-medium transition-all duration-200 flex items-center justify-between ${
                        category === cat 
                          ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/20 scale-[1.02]' 
                          : 'hover:bg-gray-100 dark:hover:bg-dark text-gray-600 dark:text-gray-300'
                      }`}
                    >
                      <span>{cat}</span>
                      {category === cat && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 2. Dinamik Kartalar Silsilasi (AnimatePresence bilan) */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="popLayout">
              {filteredTours.length > 0 ? (
                <motion.div 
                  layout
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  {filteredTours.map(tour => (
                    <motion.div 
                      layout
                      key={tour.id} 
                      variants={cardVariants}
                      whileHover={{ y: -8, transition: { duration: 0.2 } }}
                      className="bg-white dark:bg-dark-light rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl border border-gray-100 dark:border-white/5 flex flex-col h-full group"
                    >
                      {/* Rasm qismi va Micro-interaction */}
                      <div className="h-60 overflow-hidden relative">
                        <img 
                          src={tour.image} 
                          alt={tour.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                        />
                        <div className="absolute top-4 left-4 bg-white/80 dark:bg-dark/80 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-bold flex items-center space-x-1 shadow-sm">
                          <Compass className="w-3.5 h-3.5 text-secondary" />
                          <span>{tour.location}</span>
                        </div>
                        <div className="absolute top-4 right-4 bg-dark/70 dark:bg-white/90 backdrop-blur-md text-white dark:text-dark px-3 py-1.5 rounded-xl text-xs font-bold flex items-center space-x-1 shadow-sm">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{tour.duration}</span>
                        </div>
                      </div>

                      {/* Kontent qismi */}
                      <div className="p-6 flex flex-col flex-grow justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold tracking-wider uppercase text-primary/80">{tour.category}</span>
                            <div className="flex items-center space-x-1 text-sm font-bold bg-yellow-400/10 text-yellow-600 dark:text-yellow-400 px-2 py-0.5 rounded-lg">
                              <Star className="w-3.5 h-3.5 fill-current" />
                              <span>{tour.rating.toFixed(1)}</span>
                            </div>
                          </div>
                          <h3 className="text-xl font-bold line-clamp-1 group-hover:text-primary transition-colors duration-200 mb-4">{tour.name}</h3>
                        </div>

                        {/* Narx va CTA tugma */}
                        <div className="flex justify-between items-center border-t border-gray-100 dark:border-white/5 pt-4 mt-auto">
                          <div className="flex flex-col">
                            <span className="text-xs text-gray-400 uppercase font-semibold">Price per person</span>
                            <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">${tour.price}</span>
                          </div>
                          <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-5 py-3 bg-gradient-to-r from-dark to-gray-800 dark:from-light dark:to-gray-200 dark:text-dark text-white text-xs font-bold rounded-2xl shadow-md transition-all duration-150 hover:shadow-lg"
                          >
                            Explore Tour
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                /* Premium "Hech narsa topilmadi" UI */
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="w-full flex flex-col items-center justify-center py-20 text-center bg-white dark:bg-dark-light rounded-3xl border border-dashed border-gray-200 dark:border-white/10"
                >
                  <div className="p-4 bg-red-500/10 rounded-full text-red-500 mb-4">
                    <AlertCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">No Premium Tours Found</h3>
                  <p className="text-gray-400 dark:text-gray-500 text-sm max-w-sm">
                    We couldn't find any packages matching your filters. Try adjusting your budget or search query.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
};