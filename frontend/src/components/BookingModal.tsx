import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Users, Phone, Mail, User, CheckCircle2, Loader2, Sparkles } from 'lucide-react';
import { toast } from 'react-toastify';
import { useAppStore } from '../store/useAppStore';
import { submitBooking } from '../services/bookingService';

const bookingSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(7, { message: 'Please enter a valid phone number.' }),
  date: z.string().min(1, { message: 'Please select a preferred date.' }),
  guests: z.number().min(1, { message: 'At least 1 guest required.' }).max(20),
  notes: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

const getDefaultDate = () => {
  const d = new Date();
  d.setDate(d.getDate() + 7);
  return d.toISOString().split('T')[0];
};

export const BookingModal: React.FC = () => {
  const { bookingModal, closeBookingModal } = useAppStore();
  const { isOpen, itemTitle, itemType } = bookingModal;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      guests: 2,
      date: getDefaultDate(),
      notes: '',
    },
  });

  const onSubmit = async (data: BookingFormValues) => {
    try {
      const response = await submitBooking({
        ...data,
        itemTitle: itemTitle || 'General Custom Travel Experience',
        itemType: itemType || 'tour',
      });

      toast.success(
        <div>
          <p className="font-bold">Reservation Confirmed!</p>
          <p className="text-xs">
            Ref: {response.data.bookingReference} — Concierge will reach out shortly.
          </p>
        </div>,
        { autoClose: 5000 }
      );

      reset();
      closeBookingModal();
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : 'Failed to confirm booking';
      toast.error(errorMsg);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeBookingModal}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 z-10 overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-start justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-sky-500/10 text-sky-500 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Instant VIP Booking</span>
              </div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white">
                Book Your Experience
              </h2>
              {itemTitle && (
                <p className="text-sm font-semibold text-sky-500 mt-1 line-clamp-1">
                  Selected: {itemTitle}
                </p>
              )}
            </div>
            <button
              onClick={closeBookingModal}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
            {/* Full Name */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider block mb-1.5 text-slate-500 dark:text-slate-400">
                Full Name
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  {...register('fullName')}
                  type="text"
                  placeholder="e.g. Alexander Hamilton"
                  className="w-full bg-slate-50 dark:bg-slate-800 pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm text-slate-900 dark:text-white"
                />
              </div>
              {errors.fullName && (
                <p className="text-xs text-red-500 mt-1">{errors.fullName.message}</p>
              )}
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider block mb-1.5 text-slate-500 dark:text-slate-400">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="vip@example.com"
                    className="w-full bg-slate-50 dark:bg-slate-800 pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm text-slate-900 dark:text-white"
                  />
                </div>
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider block mb-1.5 text-slate-500 dark:text-slate-400">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    {...register('phone')}
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-slate-50 dark:bg-slate-800 pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm text-slate-900 dark:text-white"
                  />
                </div>
                {errors.phone && (
                  <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>
                )}
              </div>
            </div>

            {/* Date & Guests */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider block mb-1.5 text-slate-500 dark:text-slate-400">
                  Preferred Date
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    {...register('date')}
                    type="date"
                    className="w-full bg-slate-50 dark:bg-slate-800 pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm text-slate-900 dark:text-white"
                  />
                </div>
                {errors.date && (
                  <p className="text-xs text-red-500 mt-1">{errors.date.message}</p>
                )}
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider block mb-1.5 text-slate-500 dark:text-slate-400">
                  Guests Count
                </label>
                <div className="relative">
                  <Users className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    {...register('guests', { valueAsNumber: true })}
                    type="number"
                    min="1"
                    max="20"
                    className="w-full bg-slate-50 dark:bg-slate-800 pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm text-slate-900 dark:text-white"
                  />
                </div>
                {errors.guests && (
                  <p className="text-xs text-red-500 mt-1">{errors.guests.message}</p>
                )}
              </div>
            </div>

            {/* Special Notes */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider block mb-1.5 text-slate-500 dark:text-slate-400">
                Special Requests (Optional)
              </label>
              <textarea
                {...register('notes')}
                rows={2}
                placeholder="Dietary requests, helicopter transfers, anniversary surprise..."
                className="w-full bg-slate-50 dark:bg-slate-800 p-3 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm text-slate-900 dark:text-white resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 bg-linear-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white font-bold rounded-2xl shadow-lg shadow-sky-500/25 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-60 cursor-pointer active:scale-98"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Processing VIP Reservation...</span>
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Confirm VIP Reservation</span>
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
