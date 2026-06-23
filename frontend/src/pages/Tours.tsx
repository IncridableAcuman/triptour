import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { SlidersHorizontal, Search, Star } from 'lucide-react';
import { hoverCardEffect } from '../animation/variants';

export const Tours: React.FC = () => {
  const [search, setSearch] = useState('');
  const [maxPrice, setMaxPrice] = useState(2500);
  const [category, setCategory] = useState('All');

  const toursData = [
    { id: '1', name: 'Swiss Alps Grand Tour', category: 'Mountain', price: 2100, rating: 4.9, duration: '7 Days', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80' },
    { id: '2', name: 'Maldives Overwater Bungalow', category: 'Beach', price: 2450, rating: 5.0, duration: '5 Days', image: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=600&q=80' },
    { id: '3', name: 'Kyoto Temple Trails', category: 'Cultural', price: 1350, rating: 4.8, duration: '9 Days', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80' },
  ];

  const filteredTours = useMemo(() => {
    return toursData.filter(tour => 
      tour.name.toLowerCase().includes(search.toLowerCase()) &&
      tour.price <= maxPrice &&
      (category === 'All' || tour.category === category)
    );
  }, [search, maxPrice, category]);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-light dark:bg-dark text-dark dark:text-light max-w-7xl mx-auto px-6">
      <h1 className="text-4xl font-bold font-display mb-12">Find Your Premium Tour</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Advanced Filters Panel */}
        <div className="bg-white dark:bg-dark-light p-6 rounded-3xl shadow-xl border border-gray-100 dark:border-white/5 h-fit space-y-6">
          <div className="flex items-center space-x-2 font-bold mb-2">
            <SlidersHorizontal className="w-5 h-5 text-primary" />
            <span>Filters</span>
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-wider block mb-2 text-gray-400">Search</label>
            <div className="relative">
              <input 
                type="text" 
                value={search} 
                onChange={e => setSearch(e.target.value)}
                placeholder="Search package name..."
                className="w-full bg-light dark:bg-dark p-3 pl-10 rounded-xl outline-none focus:ring-2 focus:ring-primary/40 text-sm"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-wider block mb-2 text-gray-400">Max Budget: ${maxPrice}</label>
            <input 
              type="range" 
              min="1000" 
              max="3000" 
              step="50"
              value={maxPrice} 
              onChange={e => setMaxPrice(Number(e.target.value))}
              className="w-full accent-primary bg-light dark:bg-dark h-2 rounded-lg cursor-pointer"
            />
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-wider block mb-2 text-gray-400">Category</label>
            <div className="flex flex-col space-y-2">
              {['All', 'Beach', 'Mountain', 'Cultural'].map(cat => (
                <button 
                  key={cat} 
                  onClick={() => setCategory(cat)}
                  className={`text-left text-sm py-2 px-3 rounded-lg font-medium transition-colors ${category === cat ? 'bg-primary text-white' : 'hover:bg-gray-100 dark:hover:bg-dark'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredTours.map(tour => (
            <motion.div 
              key={tour.id} 
              whileHover={hoverCardEffect}
              className="bg-white dark:bg-dark-light rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-white/5"
            >
              <div className="h-56 overflow-hidden relative">
                <img src={tour.image} alt={tour.name} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-dark/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold">
                  {tour.duration}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{tour.name}</h3>
                <div className="flex items-center space-x-1 mb-4 text-sm font-semibold">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>{tour.rating}</span>
                </div>
                <div className="flex justify-between items-center border-t border-gray-100 dark:border-white/5 pt-4">
                  <span className="text-2xl font-bold text-primary">${tour.price}</span>
                  <button className="px-5 py-2 bg-dark dark:bg-light dark:text-dark text-white text-xs font-bold rounded-xl transition-transform active:scale-95">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};