import React from 'react';
import { Mail, Phone, Globe, Send, ArrowUpRight, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white dark:bg-slate-950 border-t border-slate-200/60 dark:border-slate-800/60 pt-24 pb-12 overflow-hidden transition-colors duration-300">
      {/* Orqa fon effektlari */}
      <div className="absolute top-1/4 left-[-10%] w-125 h-125 bg-sky-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-[-10%] w-100 h-100 bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Newsletter qismi */}
        <div className="w-full bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 p-8 md:p-12 rounded-4xl shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 mb-20">
          <div className="max-w-md text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 text-slate-900 dark:text-white">Join Our Secret Escape Club</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm">Receive exclusive invitations, premium resort deals, and curated luxury guidance right in your inbox.</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="w-full lg:max-w-md flex items-center bg-white dark:bg-slate-950 p-2 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-inner">
            <Mail className="w-5 h-5 text-slate-400 ml-3 shrink-0" />
            <input type="email" placeholder="Enter your elite email..." className="bg-transparent w-full px-3 py-2 text-sm border-none outline-none text-slate-900 dark:text-white placeholder-slate-400" required />
            <button type="submit" className="bg-linear-to-r from-sky-500 to-cyan-500 text-white p-3 rounded-xl hover:shadow-lg hover:shadow-sky-500/20 transition-all duration-300 active:scale-95">
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Footer Linklari */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col space-y-4">
            <h2 className="text-2xl font-bold bg-linear-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent w-fit">Trip Tour</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Crafting high-end, production-ready, ultra-luxury travel experiences for individuals who demand nothing but absolute perfection.</p>
            <div className="flex items-center space-x-3 text-xs font-semibold text-slate-500 bg-slate-100 dark:bg-slate-900 w-fit px-3 py-1.5 rounded-full border border-slate-200/60 dark:border-slate-800/60">
              <ShieldCheck className="w-4 h-4 text-cyan-500" />
              <span>Fully Verified ATOL Member</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-slate-900 dark:text-white">Top Gateways</h4>
            <ul className="space-y-3.5 text-sm text-slate-500 dark:text-slate-400">
              {['Paris & Romance', 'Dubai Modernity', 'Bali Serenity', 'Maldives Premium overwater'].map((link) => (
                <li key={link} className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-200 cursor-pointer flex items-center group">
                  <ArrowUpRight className="w-3.5 h-3.5 mr-1.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-sky-500" />
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-slate-900 dark:text-white">Legal & Support</h4>
            <ul className="space-y-3.5 text-sm text-slate-500 dark:text-slate-400">
              {['Privacy Matrix', 'Terms of Luxury Escapes', 'Cancellation Protocol', 'Premium Elite Support'].map((link) => (
                <li key={link} className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-200 cursor-pointer flex items-center group">
                  <ArrowUpRight className="w-3.5 h-3.5 mr-1.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-cyan-500" />
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-slate-900 dark:text-white">Contact VIP Desk</h4>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
              <li className="flex items-center space-x-3">
                <div className="p-2.5 bg-slate-100 dark:bg-slate-900 rounded-xl"><Phone className="w-4 h-4 text-sky-500" /></div>
                <span className="text-slate-700 dark:text-slate-300">+1 (800) LUX-TRIP</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="p-2.5 bg-slate-100 dark:bg-slate-900 rounded-xl"><Mail className="w-4 h-4 text-cyan-500" /></div>
                <span className="text-slate-700 dark:text-slate-300">concierge@triptour.premium</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="p-2.5 bg-slate-100 dark:bg-slate-900 rounded-xl"><Globe className="w-4 h-4 text-sky-500" /></div>
                <span className="text-slate-700 dark:text-slate-300">HQ — Manhattan, New York</span>
              </li>
            </ul>
          </div>
        </div>

        {/* pastki qism */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
          <p>© {currentYear} Trip Tour Inc. All rights reserved. Built with premium specifications.</p>
          <div className="flex space-x-6">
            <span className="hover:text-sky-500 cursor-pointer transition-colors">Instagram</span>
            <span className="hover:text-cyan-500 cursor-pointer transition-colors">LinkedIn</span>
            <span className="hover:text-sky-400 cursor-pointer transition-colors">Twitter X</span>
          </div>
        </div>
      </div>
    </footer>
  );
};