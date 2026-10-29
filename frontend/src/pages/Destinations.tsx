import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Star, MapPin, Search, Compass, Loader2 } from 'lucide-react';
import { Footer } from '../components/Footer';
import { useDestinations } from '../hooks/useDestinations';
import { useAppStore } from '../store/useAppStore';

// Framer Motion variantlari
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
};

const categories = ['All', 'Luxury & Spa', 'Beach', 'Adventure', 'Historical'];

export const Destinations: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const openBookingModal = useAppStore((state) => state.openBookingModal);

  // Backend API dan ma'lumotlarni olish
  const { data: destinations = [], isLoading } = useDestinations({
    category: activeTab,
    search: searchQuery,
  });

  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 text-sky-500 dark:text-sky-400 font-medium text-sm mb-4 backdrop-blur-md border border-sky-500/20"
          >
            <Compass className="w-4 h-4 animate-spin-slow" />
            Explore Destinations
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            Find Your{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-500 to-cyan-400">
              Dream Destination
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-slate-600 dark:text-slate-400"
          >
            Choose from hundreds of premium, hand-picked travel locations around the globe.
          </motion.p>
        </div>

        {/* Filter and Search Controls */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12 bg-white/50 dark:bg-white/5 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 backdrop-blur-xl">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search destination..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:text-white text-sm"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-5 py-2 rounded-xl font-medium text-sm transition-all duration-300 shrink-0 cursor-pointer ${
                  activeTab === category
                    ? 'bg-linear-to-r from-sky-500 to-cyan-500 text-white shadow-lg shadow-sky-500/25'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Loading state */}
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-24 text-slate-400">
            <Loader2 className="w-10 h-10 animate-spin text-sky-500 mb-3" />
            <p className="font-semibold text-sm">Fetching destinations from API...</p>
          </div>
        ) : (
          /* Destinations Grid */
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {destinations.map((dest) => (
              <motion.div
                key={dest.id}
                variants={cardVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800/80 shadow-md hover:shadow-2xl dark:shadow-none transition-all duration-300 flex flex-col justify-between"
              >
                {/* Card Image section */}
                <div className="relative aspect-video sm:aspect-square md:aspect-video overflow-hidden">
                  <motion.img
                    src={dest.image}
                    alt={dest.title}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-80" />

                  {/* Badge Category */}
                  <span className="absolute top-4 left-4 bg-white/80 dark:bg-slate-900/80 text-sky-600 dark:text-sky-400 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider backdrop-blur-md border border-white/20">
                    {dest.category}
                  </span>

                  {/* Duration Badge */}
                  <span className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs backdrop-blur-sm">
                    {dest.duration}
                  </span>
                </div>

                {/* Card Content section */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-sm font-medium">
                        <MapPin className="w-4 h-4 text-orange-500" />
                        {dest.country}
                      </div>
                      <div className="flex items-center gap-1 bg-amber-500/10 text-amber-600 px-2 py-0.5 rounded-lg text-xs font-bold">
                        <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                        {dest.rating}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-sky-500 transition-colors duration-200 line-clamp-1">
                      {dest.title}
                    </h3>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                        Price Starts
                      </p>
                      <p className="text-2xl font-black text-slate-900 dark:text-white">
                        ${dest.price}
                        <span className="text-sm font-medium text-slate-400">/person</span>
                      </p>
                    </div>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => openBookingModal(dest.title, 'destination')}
                      className="px-4 py-2.5 bg-slate-950 dark:bg-white text-white dark:text-slate-950 text-sm font-semibold rounded-xl hover:bg-sky-500 dark:hover:bg-sky-400 hover:text-white transition-colors duration-300 cursor-pointer"
                    >
                      Book Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {!isLoading && destinations.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg">No premium destinations match your search/filter.</p>
          </div>
        )}
      </div>
      <div className="pt-12">
        <Footer />
      </div>
    </div>
  );
};
