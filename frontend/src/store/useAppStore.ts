import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import i18n from '../constants/i18n';

interface AppState {
  theme: 'light' | 'dark';
  lang: 'uz' | 'en';
  favorites: string[];
  toggleTheme: () => void;
  setLanguage: (lang: 'uz' | 'en') => void;
  toggleFavorite: (id: string) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      theme: 'light',
      lang: 'en',
      favorites: [],

      toggleTheme: () => set((state) => {
        const nextTheme = state.theme === 'light' ? 'dark' : 'light';
        if (nextTheme === 'dark') document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');
        return { theme: nextTheme };
      }),

      setLanguage: (lang) => set(() => {
        i18n.changeLanguage(lang);
        return { lang };
      }),

      toggleFavorite: (id) => set((state) => ({
        favorites: state.favorites.includes(id)
          ? state.favorites.filter((favId) => favId !== id)
          : [...state.favorites, id],
      })),
    }),
    {
      name: 'triptour-storage', // Имя ключа в LocalStorage
    }
  )
);