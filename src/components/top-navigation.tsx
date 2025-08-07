import { ExternalLink, FolderOpen, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TopNavigationProps {
  moreProjectsText: string;
  followUsText: string;
}

export function TopNavigation({ moreProjectsText, followUsText }: TopNavigationProps) {
  const openLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed top-4 left-4 z-40 flex gap-3">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-1 shadow-lg border border-gray-200">
        <Button
          onClick={() => openLink('https://ibrahimmustafacv.github.io/')}
          className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-indigo-600 text-white font-medium text-sm hover:bg-indigo-700 transition-all duration-200 rtl:space-x-reverse"
          style={{ backgroundColor: 'var(--indigo-600)' }}
        >
          <FolderOpen className="w-4 h-4" />
          <span>{moreProjectsText}</span>
          <ExternalLink className="w-3 h-3" />
        </Button>
      </div>
      
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-1 shadow-lg border border-gray-200">
        <Button
          onClick={() => openLink('https://ibrahimmustafacv.github.io/my-social-media-page/')}
          className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-emerald-600 text-white font-medium text-sm hover:bg-emerald-700 transition-all duration-200 rtl:space-x-reverse"
          style={{ backgroundColor: 'var(--emerald)' }}
        >
          <Users className="w-4 h-4" />
          <span>{followUsText}</span>
          <ExternalLink className="w-3 h-3" />
        </Button>
      </div>
    </div>
  );
}