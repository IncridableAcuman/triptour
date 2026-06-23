import React from 'react';
import { Mail, Phone, Globe, Send, ArrowUpRight, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white dark:bg-dark border-t border-gray-100 dark:border-white/5 pt-24 pb-12 overflow-hidden transition-colors duration-300">
      {/* Background Neon Glow Accent Elements */}
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-[-10%] w-[400px] h-[400px] bg-secondary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Newsletter / Subscription Box */}
        <div className="w-full bg-gradient-to-r from-gray-50 to-gray-100 dark:from-dark-light dark:to-dark-light/60 border border-gray-100 dark:border-white/5 p-8 md:p-12 rounded-[32px] shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 mb-20">
          <div className="max-w-md text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-bold font-display tracking-tight mb-2">Join Our Secret Escape Club</h3>
            <p className="text-gray-400 text-sm">Receive exclusive invitations, premium resort deals, and curated luxury guidance right in your inbox.</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="w-full lg:max-w-md flex items-center bg-white dark:bg-dark p-2 rounded-2xl border border-gray-200/60 dark:border-white/10 shadow-inner">
            <Mail className="w-5 h-5 text-gray-400 ml-3 shrink-0" />
            <input type="email" placeholder="Enter your elite email..." className="bg-transparent w-full px-3 py-2 text-sm border-none outline-none text-dark dark:text-light placeholder-gray-400" required />
            <button type="submit" className="bg-gradient-to-r from-primary to-secondary text-white p-3 rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 active:scale-95">
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Main Footer Links Structure */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col space-y-4">
            <h2 className="text-2xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary w-fit">Trip Tour</h2>
            <p className="text-sm text-gray-400 leading-relaxed">Crafting high-end, production-ready, ultra-luxury travel experiences for individuals who demand nothing but absolute perfection.</p>
            <div className="flex items-center space-x-3 text-xs font-semibold text-gray-500 bg-gray-50 dark:bg-white/5 w-fit px-3 py-1.5 rounded-full border border-gray-100 dark:border-white/5">
              <ShieldCheck className="w-4 h-4 text-secondary" />
              <span>Fully Verified ATOL Member</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-dark dark:text-light">Top Gateways</h4>
            <ul className="space-y-3.5 text-sm text-gray-400">
              {['Paris & Romance', 'Dubai Modernity', 'Bali Serenity', 'Maldives Premium overwater'].map((link) => (
                <li key={link} className="hover:text-primary transition-colors duration-200 cursor-pointer flex items-center group">
                  <ArrowUpRight className="w-3.5 h-3.5 mr-1.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-dark dark:text-light">Legal & Support</h4>
            <ul className="space-y-3.5 text-sm text-gray-400">
              {['Privacy Matrix', 'Terms of Luxury Escapes', 'Cancellation Protocol', 'Premium Elite Support'].map((link) => (
                <li key={link} className="hover:text-secondary transition-colors duration-200 cursor-pointer flex items-center group">
                  <ArrowUpRight className="w-3.5 h-3.5 mr-1.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-dark dark:text-light">Contact VIP Desk</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center space-x-3">
                <div className="p-2.5 bg-gray-50 dark:bg-white/5 rounded-xl"><Phone className="w-4 h-4 text-primary" /></div>
                <span>+1 (800) LUX-TRIP</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="p-2.5 bg-gray-50 dark:bg-white/5 rounded-xl"><Mail className="w-4 h-4 text-secondary" /></div>
                <span>concierge@triptour.premium</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="p-2.5 bg-gray-50 dark:bg-white/5 rounded-xl"><Globe className="w-4 h-4 text-accent" /></div>
                <span>HQ — Manhattan, New York</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar Section */}
        <div className="border-t border-gray-100 dark:border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-medium">
          <p>© {currentYear} Trip Tour Inc. All rights reserved. Built with premium specifications.</p>
          <div className="flex space-x-6">
            <span className="hover:text-primary cursor-pointer transition-colors">Instagram</span>
            <span className="hover:text-secondary cursor-pointer transition-colors">LinkedIn</span>
            <span className="hover:text-accent cursor-pointer transition-colors">Twitter X</span>
          </div>
        </div>
      </div>
    </footer>
  );
};