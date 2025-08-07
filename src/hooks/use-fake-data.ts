import { useState, useEffect } from 'react';
import { generateFakeData, type FakeData } from '@/lib/data-generator';
import type { Language } from '@/lib/translations';

interface SavedData {
  data: FakeData;
  language: Language;
  timestamp: number;
}

export function useFakeData(language: Language) {
  const [data, setData] = useState<FakeData | null>(null);

  const saveToLocalStorage = (fakeData: FakeData) => {
    const savedData: SavedData = {
      data: fakeData,
      language,
      timestamp: Date.now()
    };
    localStorage.setItem('fakeDataGenerator', JSON.stringify(savedData));
  };

  const loadFromLocalStorage = (): boolean => {
    try {
      const saved = localStorage.getItem('fakeDataGenerator');
      if (saved) {
        const parsed: SavedData = JSON.parse(saved);
        // Only load if data is less than 1 hour old and same language
        if (Date.now() - parsed.timestamp < 3600000 && parsed.language === language) {
          setData(parsed.data);
          return true;
        }
      }
    } catch (e) {
      console.error('Error loading from localStorage:', e);
    }
    return false;
  };

  const generateData = () => {
    const newData = generateFakeData(language);
    setData(newData);
    saveToLocalStorage(newData);
  };

  // Initialize or regenerate data when language changes
  useEffect(() => {
    if (!loadFromLocalStorage()) {
      generateData();
    }
  }, [language]);

  return {
    data,
    generateData,
    isLoading: data === null
  };
}
