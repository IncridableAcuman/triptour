import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Send, Loader2 } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, { message: "Ism kamida 2 ta belgidan iborat bo'lishi kerak." }),
  email: z.string().email({ message: "Iltimos, haqiqiy elektron pochta manzilini kiriting." }),
  message: z.string().min(10, { message: "Xabar kamida 10 ta belgidan iborat bo'lishi kerak." }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Premium Form Data Received Successfully", data);
    reset();
  };

  // Stagger animatsiya konfiguratsiyasi
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-light dark:bg-dark text-dark dark:text-light transition-colors duration-500">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
      >
        {/* Info qismi */}
        <motion.div variants={itemVariants} className="space-y-8">
          <div>
            <span className="text-primary font-bold uppercase tracking-widest text-xs block mb-2">
              Xabar Yo'llash
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight">
              Biz bilan bog'laning
            </h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-md text-sm leading-relaxed">
              Premium sayohatlar, maxsus buyurtmalar va VIP xizmatlar bo'yicha savollaringiz bo'lsa, konsyerj xizmati sizga yordam berishga tayyor.
            </p>
          </div>

          <div className="space-y-4">
            <motion.div 
              whileHover={{ scale: 1.02, y: -2 }}
              className="flex items-center space-x-4 p-5 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-gray-100 dark:border-white/5 backdrop-blur-sm"
            >
              <div className="p-3 bg-primary/10 rounded-xl text-primary">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Email</p>
                <p className="text-sm font-semibold">vip@triptour.com</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02, y: -2 }}
              className="flex items-center space-x-4 p-5 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-gray-100 dark:border-white/5 backdrop-blur-sm"
            >
              <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Aloqa markazi</p>
                <p className="text-sm font-semibold">+1 (800) 555-TRIP</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Forma qismi (Real-time feedback va Glassmorphic dizayn) */}
        <motion.div 
          variants={itemVariants}
          className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-2xl border border-gray-100 dark:border-white/5 relative overflow-hidden"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider block mb-2 text-gray-400 dark:text-gray-500">To'liq ismingiz</label>
              <input 
                {...register('name')} 
                placeholder="John Doe"
                className="w-full bg-gray-50 dark:bg-slate-800/50 p-4 rounded-xl border border-transparent focus:border-primary focus:bg-white dark:focus:bg-slate-900 outline-none text-sm transition-all shadow-inner" 
              />
              <AnimatePresence>
                {errors.name && (
                  <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-xs text-red-500 mt-1.5 font-medium">{errors.name.message}</motion.p>
                )}
              </AnimatePresence>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider block mb-2 text-gray-400 dark:text-gray-500">Elektron pochta</label>
              <input 
                {...register('email')} 
                placeholder="example@domain.com"
                className="w-full bg-gray-50 dark:bg-slate-800/50 p-4 rounded-xl border border-transparent focus:border-primary focus:bg-white dark:focus:bg-slate-900 outline-none text-sm transition-all shadow-inner" 
              />
              <AnimatePresence>
                {errors.email && (
                  <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-xs text-red-500 mt-1.5 font-medium">{errors.email.message}</motion.p>
                )}
              </AnimatePresence>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider block mb-2 text-gray-400 dark:text-gray-500">Xabar matni</label>
              <textarea 
                rows={4} 
                {...register('message')} 
                placeholder="Sizni qiziqtirgan savollarni batafsil qoldiring..."
                className="w-full bg-gray-50 dark:bg-slate-800/50 p-4 rounded-xl border border-transparent focus:border-primary focus:bg-white dark:focus:bg-slate-900 outline-none text-sm transition-all shadow-inner resize-none" 
              />
              <AnimatePresence>
                {errors.message && (
                  <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-xs text-red-500 mt-1.5 font-medium">{errors.message.message}</motion.p>
                )}
              </AnimatePresence>
            </div>

            <motion.button 
              type="submit" 
              disabled={isSubmitting} 
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className="w-full py-4 bg-linear-to-r from-primary to-secondary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Xavfsiz yuborilmoqda...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Xabarni yuborish</span>
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};