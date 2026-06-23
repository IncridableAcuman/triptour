import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        destinations: "Destinations",
        tours: "Tours",
        about: "About",
        contact: "Contact",
        bookNow: "Book Now"
      },
      hero: {
        title: "Explore The World With",
        subtitle: "Discover unforgettable premium adventures and customized dream destinations designed exclusively for you.",
        searchPlaceholder: "Where to go?",
        dateLabel: "Date",
        typeLabel: "Type",
        allPackages: "All Packages",
        luxurySpa: "Luxury & Spa",
        adventure: "Adventure",
        searchBtn: "Explore Now"
      },
      destinations: {
        title: "Popular Destinations",
        subtitle: "Top Escapes",
        fromPackage: "From package"
      }
    }
  },
  uz: {
    translation: {
      nav: {
        home: "Bosh sahifa",
        destinations: "Yo'nalishlar",
        tours: "Turlar",
        about: "Biz haqimizda",
        contact: "Aloqa",
        bookNow: "Band qilish"
      },
      hero: {
        title: "Dunyoni Biz Bilan Kashf Eting",
        subtitle: "Faqat siz uchun maxsus ishlab chiqilgan unutilmas premium sarguzashtlar va orzuingizdagi yo'nalishlarni kashf eting.",
        searchPlaceholder: "Qayerga borasiz?",
        dateLabel: "Sana",
        typeLabel: "Tur turi",
        allPackages: "Barcha paketlar",
        luxurySpa: "Lyuks va Spa",
        adventure: "Sarguzasht",
        searchBtn: "Qidirish"
      },
      destinations: {
        title: "Mashhur Yo'nalishlar",
        subtitle: "Eng yaxshi maskanlar",
        fromPackage: "Paketdan boshlab"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;