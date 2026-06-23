import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import './index.css';
import './constants/i18n';

// Создаем клиент для кэширования запросов
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true, // Авто-обновление данных при возвращении на вкладку
      retry: 2, // Количество попыток при ошибке сети
      staleTime: 1000 * 60 * 5, // Данные считаются свежими 5 минут
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);