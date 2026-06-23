import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Users, Heart, ArrowRight } from 'lucide-react';

const stats = [
  { id: 1, value: "12K+", label: "Happy Travelers" },
  { id: 2, value: "450+", label: "Destinations" },
  { id: 3, value: "15+", label: "Years Experience" },
  { id: 4, value: "4.9", label: "Avg Rating" }
];

const values = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-sky-500" />,
    title: "Ultimate Security",
    description: "Your safety and security is our utmost priority with 24/7 smart global support infrastructure."
  },
  {
    icon: <Award className="w-6 h-6 text-cyan-500" />,
    title: "Award Winning Service",
    description: "Recognized as the best luxury and personalized tour provider across consecutive elite travel groups."
  },
  {
    icon: <Heart className="w-6 h-6 text-orange-500" />,
    title: "Passion for Exploration",
    description: "We orchestrate tailor-made itineraries that transform simple trips into deep soul-searching adventures."
  }
];

export const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-500 font-medium text-sm backdrop-blur-md">
              <Users className="w-4 h-4" />
              Our Story
            </div>
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Crafting Memorable Journeys Since <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-500">2011</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              At Trip Tour, we believe exploration broadens horizons and connects hearts. We started as a group of passionate travelers dreaming of making global explorations seamless, luxurious, and accessible to anyone wanting to experience raw natural beauty.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Today, we operate globally, bringing premium luxury glassmorphism aesthetics and AI-driven predictive logistics to turn every single milestone travel into a masterpiece memory.
            </p>
            <div className="pt-4">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-sky-500/20 transition-all duration-300">
                Contact Our Agents
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* Graphical/Image Mosaic Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-sky-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl" />
            
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=600&q=80" 
                  alt="Traveler 1" 
                  className="rounded-3xl object-cover h-64 w-full shadow-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80" 
                  alt="Traveler 2" 
                  className="rounded-3xl object-cover h-40 w-full shadow-lg"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img 
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80" 
                  alt="Traveler 3" 
                  className="rounded-3xl object-cover h-40 w-full shadow-lg"
                />
                <img 
                  src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80" 
                  alt="Traveler 4" 
                  className="rounded-3xl object-cover h-64 w-full shadow-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Counter Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-none mb-24 text-center backdrop-blur-md"
        >
          {stats.map((stat) => (
            <div key={stat.id} className="space-y-2">
              <h3 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-500">
                {stat.value}
              </h3>
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Core Values Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Our Core Pillars
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            We hold ourselves to absolute premium standards to ensure every experience leaves you inspired.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800/60 shadow-sm"
            >
              <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl w-fit mb-4">
                {val.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                {val.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {val.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};