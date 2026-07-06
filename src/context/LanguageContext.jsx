import { createContext, useContext, useState } from 'react';
import en from '../locales/en';
import mr from '../locales/mr';

const translations = { en, mr };

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  const t = (key) => {
    const parts = key.split('.');
    let value = translations[language];
    for (const part of parts) {
      value = value?.[part];
    }
    return value ?? key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}