import { useState } from 'react';
import { RefreshCw, Zap, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageToggle } from '@/components/language-toggle';
import { TopNavigation } from '@/components/top-navigation';
import { DataField } from '@/components/data-field';
import { ToastNotification } from '@/components/toast-notification';
import { useLanguage } from '@/hooks/use-language';
import { useFakeData } from '@/hooks/use-fake-data';
import { translations } from '@/lib/translations';

export default function Home() {
  const { language, toggleLanguage } = useLanguage();
  const { data, generateData, isLoading } = useFakeData(language);
  const [showToast, setShowToast] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const t = translations[language];

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setShowToast(true);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setShowToast(true);
    }
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Add a small delay for better UX
    setTimeout(() => {
      generateData();
      setIsGenerating(false);
    }, 500);
  };

  const copyAllData = () => {
    if (!data) return;
    
    const allDataText = Object.entries(data)
      .map(([key, value]) => `${t.fields[key as keyof typeof t.fields] || key}: ${value}`)
      .join('\n');
    
    copyToClipboard(allDataText);
  };

  if (isLoading || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen transition-all duration-300">
      <TopNavigation
        moreProjectsText={t.moreProjects}
        followUsText={t.followUs}
      />
      
      <LanguageToggle
        currentLanguage={language}
        onToggle={toggleLanguage}
        langToggleText={t.langToggle}
      />

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <header className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-2xl mb-6 shadow-lg">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </header>

        {/* Generate Button */}
        <div className="text-center mb-8">
          <Button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="inline-flex items-center px-8 py-4 gradient-primary hover:opacity-90 text-white font-semibold rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-200 text-lg"
          >
            <RefreshCw className={`w-6 h-6 mr-3 rtl:ml-3 rtl:mr-0 ${isGenerating ? 'animate-spin' : ''}`} />
            <span>{t.generateBtn}</span>
          </Button>
        </div>

        {/* Data Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <DataField
            label={t.fields.fullName}
            value={data.fullName}
            onCopy={() => copyToClipboard(data.fullName)}
          />
          
          <DataField
            label={t.fields.email}
            value={data.email}
            onCopy={() => copyToClipboard(data.email)}
          />
          
          <DataField
            label={t.fields.phone}
            value={data.phone}
            onCopy={() => copyToClipboard(data.phone)}
          />
          
          <DataField
            label={t.fields.password}
            value={data.password}
            onCopy={() => copyToClipboard(data.password)}
          />
          
          <DataField
            label={t.fields.username}
            value={data.username}
            onCopy={() => copyToClipboard(data.username)}
          />
          
          <DataField
            label={t.fields.location}
            value={data.location}
            onCopy={() => copyToClipboard(data.location)}
          />
          
          <DataField
            label={t.fields.dateOfBirth}
            value={data.dateOfBirth}
            onCopy={() => copyToClipboard(data.dateOfBirth)}
          />
          
          <DataField
            label={t.fields.gender}
            value={data.gender}
            onCopy={() => copyToClipboard(data.gender)}
          />
          
          <DataField
            label={t.fields.avatar}
            value={data.avatar}
            onCopy={() => copyToClipboard(data.avatar)}
            isAvatar={true}
            avatarUrl={data.avatar}
          />
          
          <DataField
            label={t.fields.address}
            value={data.address}
            onCopy={() => copyToClipboard(data.address)}
          />
          
          <DataField
            label={t.fields.company}
            value={data.company}
            onCopy={() => copyToClipboard(data.company)}
          />
          
          <DataField
            label={t.fields.jobTitle}
            value={data.jobTitle}
            onCopy={() => copyToClipboard(data.jobTitle)}
          />
        </div>

        {/* Copy All Button */}
        <div className="text-center mb-8">
          <Button
            onClick={copyAllData}
            className="inline-flex items-center px-6 py-3 gradient-emerald hover:opacity-90 text-white font-semibold rounded-xl shadow-lg transition-all duration-200"
          >
            <Copy className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0" />
            <span>{t.copyAllBtn}</span>
          </Button>
        </div>
      </div>

      <ToastNotification
        message={t.toastMessage}
        isVisible={showToast}
        onHide={() => setShowToast(false)}
      />
    </div>
  );
}
