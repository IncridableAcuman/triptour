import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Mail, Phone, Send, Loader2 } from 'lucide-react';
import { toast } from 'react-toastify';
import { Footer } from '../components/Footer';
import { submitContact } from '../services/contactService';

const contactSchema = z.object({
  name: z.string().min(2, { message: "Ism kamida 2 ta belgidan iborat bo'lishi kerak." }),
  email: z.string().email({ message: 'Iltimos, haqiqiy elektron pochta manzilini kiriting.' }),
  message: z.string().min(10, { message: "Xabar kamida 10 ta belgidan iborat bo'lishi kerak." }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const response = await submitContact(data);
      toast.success(
        response.message || 'Xabaringiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog‘lanamiz.'
      );
      reset();
    } catch (err: unknown) {
      const errorMsg =
        err instanceof Error ? err.message : 'Xabarni yuborishda xatolik yuz berdi.';
      toast.error(errorMsg);
    }
  };

  // Stagger animatsiya konfiguratsiyasi
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-500">
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
            <span className="text-sky-500 font-bold uppercase tracking-widest text-xs block mb-2">
              Xabar Yo'llash
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight text-slate-900 dark:text-white">
              Biz bilan bog'laning
            </h1>
            <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-md text-sm leading-relaxed">
              Premium sayohatlar, maxsus buyurtmalar va VIP xizmatlar bo'yicha savollaringiz bo'lsa, konsyerj
              xizmati sizga yordam berishga tayyor.
            </p>
          </div>

          <div className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              className="flex items-center space-x-4 p-5 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200/60 dark:border-white/5 backdrop-blur-sm"
            >
              <div className="p-3 bg-sky-500/10 rounded-xl text-sky-500">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Email</p>
                <p className="text-sm font-semibold">vip@triptour.com</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              className="flex items-center space-x-4 p-5 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200/60 dark:border-white/5 backdrop-blur-sm"
            >
              <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-500">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  Aloqa markazi
                </p>
                <p className="text-sm font-semibold">+1 (800) 555-TRIP</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Forma qismi */}
        <motion.div
          variants={itemVariants}
          className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-2xl border border-slate-200/60 dark:border-white/5 relative overflow-hidden"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider block mb-2 text-slate-500 dark:text-slate-400">
                To'liq ismingiz
              </label>
              <input
                {...register('name')}
                placeholder="John Doe"
                className="w-full bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700 focus:border-sky-500 focus:bg-white dark:focus:bg-slate-900 outline-none text-sm transition-all shadow-inner text-slate-900 dark:text-white"
              />
              <AnimatePresence>
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-xs text-red-500 mt-1.5 font-medium"
                  >
                    {errors.name.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider block mb-2 text-slate-500 dark:text-slate-400">
                Elektron pochta
              </label>
              <input
                {...register('email')}
                placeholder="example@domain.com"
                className="w-full bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700 focus:border-sky-500 focus:bg-white dark:focus:bg-slate-900 outline-none text-sm transition-all shadow-inner text-slate-900 dark:text-white"
              />
              <AnimatePresence>
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-xs text-red-500 mt-1.5 font-medium"
                  >
                    {errors.email.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider block mb-2 text-slate-500 dark:text-slate-400">
                Xabar matni
              </label>
              <textarea
                rows={4}
                {...register('message')}
                placeholder="Sizni qiziqtirgan savollarni batafsil qoldiring..."
                className="w-full bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700 focus:border-sky-500 focus:bg-white dark:focus:bg-slate-900 outline-none text-sm transition-all shadow-inner resize-none text-slate-900 dark:text-white"
              />
              <AnimatePresence>
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-xs text-red-500 mt-1.5 font-medium"
                  >
                    {errors.message.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className="w-full py-4 bg-linear-to-r from-sky-500 to-cyan-500 text-white font-bold rounded-xl shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 transition-all flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
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
      <div className="pt-12">
        <Footer />
      </div>
    </div>
  );
};
