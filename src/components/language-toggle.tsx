import { Button } from '@/components/ui/button';
import type { Language } from '@/lib/translations';

interface LanguageToggleProps {
  currentLanguage: Language;
  onToggle: () => void;
  langToggleText: string;
}

export function LanguageToggle({ currentLanguage, onToggle, langToggleText }: LanguageToggleProps) {
  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-white/80 backdrop-blur-sm rounded-full p-1 shadow-lg border border-gray-200">
        <Button
          onClick={onToggle}
          className="flex items-center space-x-2 px-4 py-2 rounded-full bg-indigo-600 text-white font-medium text-sm hover:bg-indigo-700 transition-all duration-200 rtl:space-x-reverse"
          style={{ backgroundColor: 'var(--indigo-600)' }}
        >
          <span>{langToggleText}</span>
        </Button>
      </div>
    </div>
  );
}
