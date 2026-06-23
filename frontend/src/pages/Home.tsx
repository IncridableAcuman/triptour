import React, { useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Search, Star, Heart, MapPin, Calendar, Compass, ShieldCheck, Award, Users, ArrowRight, Eye, Sparkles, SlidersHorizontal } from 'lucide-react';
import CountUp from 'react-countup';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { fadeInUp, hoverCardEffect } from '../animation/variants';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Footer } from '../components/Footer';

export const Home: React.FC = () => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchLocation, setSearchLocation] = useState<string>('');
  const [budgetLimit, setBudgetLimit] = useState<number>(3000);
  
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: false, threshold: 0.1 });

  const toggleFav = (id: string) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);
  };

  const categories = ['All', 'Luxury & Spa', 'Adventure', 'Beach', 'Historical'];

  const sampleDestinations = [
    { id: '1', title: 'Paris Eternal', country: 'France', rating: 4.9, price: 1290, category: 'Luxury & Spa', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80' },
    { id: '2', title: 'Futuristic Dubai', country: 'UAE', rating: 4.8, price: 1850, category: 'Luxury & Spa', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80' },
    { id: '3', title: 'Mystical Bali', country: 'Indonesia', rating: 4.9, price: 850, category: 'Beach', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80' },
    { id: '4', title: 'Swiss Alps Crest', country: 'Switzerland', rating: 5.0, price: 2100, category: 'Adventure', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80' },
    { id: '5', title: 'Kyoto Shrines', country: 'Japan', rating: 4.7, price: 1450, category: 'Historical', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80' },
    { id: '6', title: 'Maldives Overwater', country: 'Maldives', rating: 4.9, price: 2400, category: 'Beach', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=600&q=80' },
  ];

  // Kengaytirilgan Filtr Tizimi (Sarlavha, Kategoriya va Narx bo'yicha)
  const filteredDestinations = sampleDestinations.filter(dest => {
    const matchesCategory = activeCategory === 'All' || dest.category === activeCategory;
    const matchesSearch = dest.title.toLowerCase().includes(searchLocation.toLowerCase()) || dest.country.toLowerCase().includes(searchLocation.toLowerCase());
    const matchesBudget = dest.price <= budgetLimit;
    return matchesCategory && matchesSearch && matchesBudget;
  });

  return (
    <div className="bg-white dark:bg-dark text-slate-900 dark:text-light overflow-x-hidden font-sans selection:bg-primary selection:text-white transition-colors duration-300">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-white dark:to-dark z-10" />
        
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect={'fade'}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="absolute inset-0 w-full h-full"
        >
          <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1920&q=80" className="w-full h-full object-cover scale-100" alt="Slide 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1920&q=80" className="w-full h-full object-cover scale-100" alt="Slide 2" />
          </SwiperSlide>
        </Swiper>

        <div className="relative max-w-5xl mx-auto px-6 text-center z-20 mt-12">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/30 mb-6 text-white text-xs font-semibold tracking-wider uppercase">
            <Compass className="w-4 h-4 text-primary animate-spin-slow" />
            <span>Discover Ultimate Premium Escapes</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold font-display text-white mb-6 leading-tight drop-shadow-md"
          >
            Explore The World With <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">Trip Tour</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-base md:text-xl text-white/90 max-w-2xl mx-auto mb-12 font-medium">
            Discover unforgettable premium adventures and customized dream destinations designed exclusively for you.
          </motion.p>

          {/* Premium Glassmorphic Interaktiv Qidiruv Formasi */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="w-full bg-black/40 dark:bg-dark/60 backdrop-blur-xl p-5 md:p-6 rounded-3xl border border-white/10 shadow-2xl grid grid-cols-1 md:grid-cols-4 gap-4 text-left"
          >
            <div className="flex flex-col space-y-1.5 p-2">
              <label className="text-xs font-bold uppercase tracking-wider text-white/70 flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-primary" /> Destination</label>
              <input 
                type="text" 
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                placeholder="Where to go? (e.g. Paris)" 
                className="bg-transparent border-none outline-none text-white placeholder-white/40 w-full text-sm font-semibold" 
              />
            </div>
            <div className="flex flex-col space-y-1.5 p-2 border-t md:border-t-0 md:border-l border-white/10">
              <label className="text-xs font-bold uppercase tracking-wider text-white/70 flex items-center gap-1.5"><SlidersHorizontal className="w-3.5 h-3.5 text-secondary" /> Max Budget (${budgetLimit})</label>
              <input 
                type="range" 
                min="500" 
                max="3000" 
                step="100"
                value={budgetLimit} 
                onChange={(e) => setBudgetLimit(Number(e.target.value))}
                className="w-full accent-primary bg-white/20 h-1 rounded-lg cursor-pointer mt-2" 
              />
            </div>
            <div className="flex flex-col space-y-1.5 p-2 border-t md:border-t-0 md:border-l border-white/10">
              <label className="text-xs font-bold uppercase tracking-wider text-white/70 flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-accent" /> Date</label>
              <input type="date" className="bg-transparent border-none outline-none text-white text-sm w-full font-semibold filter brightness-200" />
            </div>
            <button className="w-full h-full min-h-13 bg-linear-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-bold rounded-2xl flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg shadow-primary/20 transform active:scale-95">
              <Search className="w-5 h-5" />
              <span>Search Now</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. VALUE PROPOSITION */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <ShieldCheck className="w-8 h-8 text-primary" />, title: 'Secure Premium Travel', desc: 'Every booking contains luxury insurance coverage and fully certified safety protocols.' },
            { icon: <Award className="w-8 h-8 text-secondary" />, title: 'Award Winning Guide', desc: 'Ranked top luxury travel management system by prestigious world tourism metrics.' },
            { icon: <Users className="w-8 h-8 text-accent" />, title: 'Elite Community', desc: 'Join over 50,000+ VIP travelers creating shared moments worldwide.' },
          ].map((feat, idx) => (
            <motion.div key={idx} variants={fadeInUp()} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-slate-50 dark:bg-dark-light border border-slate-100 dark:border-white/5 p-8 rounded-3xl shadow-xs hover:shadow-xl transition-all duration-300 group">
              <div className="p-4 bg-white dark:bg-white/5 rounded-2xl w-fit mb-6 shadow-sm group-hover:bg-primary/10 transition-colors">
                {feat.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 ">{feat.title}</h3>
              <p className="text-slate-500 dark:text-gray-400 text-sm leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. POPULAR DESTINATIONS (Matnlar va ranglar to'liq tuzatildi) */}
      <section className="py-12 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-2">Top Escapes</span>
            <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-slate-900 dark:text-white">Popular Destinations</h2>
          </div>
          <div className="flex flex-wrap gap-2 bg-slate-100 dark:bg-white/5 p-1.5 rounded-2xl overflow-x-auto w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${activeCategory === cat ? 'bg-linear-to-r from-primary to-secondary text-white shadow-md' : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-light'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredDestinations.map((dest) => (
              <motion.div 
                key={dest.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={hoverCardEffect}
                className="bg-slate-50 dark:bg-dark-light rounded-3xl overflow-hidden shadow-lg border border-slate-200/60 dark:border-white/5 relative group cursor-pointer"
              >
                <div className="relative h-72 overflow-hidden">
                  <img src={dest.image} alt={dest.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-100 transition-opacity duration-300" />
                  <button 
                    onClick={(e) => { e.stopPropagation(); toggleFav(dest.id); }}
                    className="absolute top-4 right-4 p-3 rounded-full bg-white/90 dark:bg-dark/80 backdrop-blur-md shadow-md hover:bg-white transition-colors z-20"
                  >
                    <Heart className={`w-5 h-5 transition-colors ${favorites.includes(dest.id) ? 'fill-accent text-accent' : 'text-slate-700 dark:text-light'}`} />
                  </button>
                  <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold flex items-center space-x-1 text-white z-20 border border-white/10">
                    <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                    <span>{dest.rating}</span>
                  </div>
                </div>
                {/* MATN KO'RINISH XATOLIKLARI BUTKUL TUZATILDI */}
                <div className="p-6 relative bg-white dark:bg-dark-light">
                  <span className="text-xs text-primary font-extrabold tracking-wider uppercase mb-1.5 block">{dest.country}</span>
                  <h3 className="text-xl font-bold mb-4 text-slate-900  group-hover:text-primary transition-colors">{dest.title}</h3>
                  <div className="flex justify-between items-center border-t border-slate-100 dark:border-white/5 pt-4">
                    <span className="text-xs sm:text-sm text-slate-500 dark:text-gray-400 font-medium">All-inclusive package</span>
                    <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">${dest.price}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        {filteredDestinations.length === 0 && (
          <div className="text-center py-12 font-medium text-slate-400">No destinations found matching your active search criteria.</div>
        )}
      </section>

      {/* 4. STATISTICS WITH REAL-TIME COUNTERS (Rang va ko'rinish xatoliklari tuzatildi) */}
      <section ref={statsRef} className="my-16 py-20 bg-slate-900 dark:bg-dark text-white relative overflow-hidden rounded-[40px] max-w-7xl mx-auto px-6 border border-slate-800 dark:border-white/5 shadow-xl">
        <div className="absolute inset-0 bg-linear-to-r from-primary/20 to-secondary/20 opacity-30" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10 text-center">
          {[
            { value: 50, suffix: '12K+', label: 'Happy Travelers' },
            { value: 120, suffix: '450+', label: 'Premium Destinations' },
            { value: 10, suffix: '5K+', label: 'Top Reviews' },
            { value: 15, suffix: '5', label: 'Years Experience' }
          ].map((stat, i) => (
            <div key={i} className="p-4">
              {/* Oq fondagi muammo bartaraf etildi, matn doim yorqin va ko'rinadigan bo'ladi */}
              <h3 className="text-4xl md:text-6xl font-extrabold font-display mb-2 text-white drop-shadow-[0_2px_10px_rgba(var(--primary-rgb),0.3)]">
                {statsInView ? <CountUp end={stat.value} duration={2.5} /> : ''}{stat.suffix}
              </h3>
              <p className="text-xs md:text-sm text-slate-300 dark:text-gray-400 tracking-wide font-semibold uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. VISUAL JOURNEY MASONRY GALLERY */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm">Visual Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mt-2 text-slate-900 dark:text-white">Shared Moments</h2>
        </div>
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {[
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80'
          ].map((imgSrc, idx) => (
            <motion.div key={idx} className="break-inside-avoid relative rounded-3xl overflow-hidden group shadow-md cursor-pointer" whileHover={{ scale: 1.02 }}>
              <img src={imgSrc} alt="Gallery item" className="w-full object-cover rounded-3xl" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <span className="text-white text-xs font-bold tracking-wider uppercase bg-primary px-4 py-2 rounded-full flex items-center gap-1"><Eye className="w-3.5 h-3.5" /> View Escape</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🌟 YANGI QO'SHILGAN FUNKSIYA: SPECIAL MEMBERSHIP & OFFERS BO'LIMI */}
      <section className="py-16 max-w-7xl mx-auto px-6 mb-12">
        <div className="bg-linear-to-br from-primary/10 via-secondary/5 to-transparent dark:from-white/5 dark:to-transparent border border-primary/20 dark:border-white/10 rounded-[3rem] p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-xl text-center md:text-left space-y-4">
            <div className="inline-flex items-center gap-1.5 bg-primary/20 dark:bg-primary/30 text-primary dark:text-light px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Limited Premium Deal
            </div>
            <h3 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-slate-900 dark:text-white">Get 20% Off Your First Luxury Voyage</h3>
            <p className="text-slate-500 dark:text-gray-400 text-sm md:text-base leading-relaxed">Sign up to our VIP mailing pipeline today and access unlisted 5-star packages across Europe and Southeast Asia.</p>
          </div>
          <button className="whitespace-nowrap bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-dark px-8 py-4 rounded-2xl text-sm font-bold shadow-lg flex items-center gap-2 transition-all group shrink-0">
            Claim Invitation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
      <Footer/>
    </div>
  );
};