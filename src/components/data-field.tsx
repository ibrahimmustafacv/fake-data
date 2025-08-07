import { Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DataFieldProps {
  label: string;
  value: string;
  onCopy: () => void;
  isAvatar?: boolean;
  avatarUrl?: string;
}

export function DataField({ label, value, onCopy, isAvatar = false, avatarUrl }: DataFieldProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 animate-fade-in">
      <div className="flex items-center justify-between mb-3">
        <label className="text-sm font-semibold text-gray-700">
          {label}
        </label>
        <Button
          variant="ghost"
          size="sm"
          onClick={onCopy}
          className="text-gray-400 hover:text-indigo-600 transition-colors p-1"
        >
          <Copy className="w-5 h-5" />
        </Button>
      </div>
      <div className="bg-gray-50 rounded-xl p-4">
        {isAvatar && avatarUrl ? (
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <img 
              src={avatarUrl} 
              alt="User Avatar" 
              className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
            />
            <span className="text-gray-800 font-medium break-all">{value}</span>
          </div>
        ) : (
          <span className={`text-gray-800 font-medium ${
            label.toLowerCase().includes('password') ? 'font-mono' : ''
          } break-all`}>
            {value}
          </span>
        )}
      </div>
    </div>
  );
}
