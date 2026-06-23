import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AppState {
  theme: 'light' | 'dark';
  isBookModalOpen: boolean;
  lang: 'uz' | 'en';
  toggleTheme: () => void;
  setLanguage: (lang: 'uz' | 'en') => void;
  setBookModal: (isOpen: boolean) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      theme: 'light',
      lang: 'uz',
      toggleTheme: () => set((state) => {
        const nextTheme = state.theme === 'light' ? 'dark' : 'light';
        return { theme: nextTheme };
      }),
      setLanguage: (lang) => set({ lang }),
      setBookModal: (isOpen) => set({ isBookModalOpen: isOpen }),
    }),
    { name: 'app-storage' }
  )
);