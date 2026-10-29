import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface BookingModalState {
  isOpen: boolean;
  itemTitle?: string;
  itemType?: 'destination' | 'tour';
}

interface AppState {
  theme: 'light' | 'dark';
  lang: 'uz' | 'en';
  bookingModal: BookingModalState;
  toggleTheme: () => void;
  setLanguage: (lang: 'uz' | 'en') => void;
  openBookingModal: (itemTitle?: string, itemType?: 'destination' | 'tour') => void;
  closeBookingModal: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      theme: 'light',
      lang: 'uz',
      bookingModal: {
        isOpen: false,
        itemTitle: undefined,
        itemType: undefined,
      },
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === 'light' ? 'dark' : 'light',
        })),
      setLanguage: (lang) => set({ lang }),
      openBookingModal: (itemTitle, itemType = 'tour') =>
        set({
          bookingModal: {
            isOpen: true,
            itemTitle,
            itemType,
          },
        }),
      closeBookingModal: () =>
        set({
          bookingModal: {
            isOpen: false,
            itemTitle: undefined,
            itemType: undefined,
          },
        }),
    }),
    {
      name: 'app-storage',
      // Faqat theme va lang larni saqlaymiz, bookingModal ochiq qolmasligi uchun
      partialize: (state) => ({ theme: state.theme, lang: state.lang }),
    }
  )
);
