import { useState, useEffect } from 'react';
import type { Language } from '@/lib/translations';

export function useLanguage() {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Load language preference from localStorage
    const savedLang = localStorage.getItem('preferredLanguage') as Language;
    if (savedLang && ['en', 'ar'].includes(savedLang)) {
      setLanguage(savedLang);
      updateDocumentLanguage(savedLang);
    }
  }, []);

  const updateDocumentLanguage = (lang: Language) => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  };

  const toggleLanguage = () => {
    const newLang: Language = language === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
    updateDocumentLanguage(newLang);
    localStorage.setItem('preferredLanguage', newLang);
  };

  return {
    language,
    toggleLanguage,
    isRTL: language === 'ar'
  };
}
