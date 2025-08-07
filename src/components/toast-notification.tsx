import { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

interface ToastNotificationProps {
  message: string;
  isVisible: boolean;
  onHide: () => void;
}

export function ToastNotification({ message, isVisible, onHide }: ToastNotificationProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onHide();
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, onHide]);

  return (
    <div 
      className={`fixed bottom-6 right-6 transform transition-all duration-300 z-50 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div className="gradient-emerald text-white px-6 py-3 rounded-xl shadow-lg flex items-center space-x-2 rtl:space-x-reverse">
        <Check className="w-5 h-5" />
        <span className="font-medium">{message}</span>
      </div>
    </div>
  );
}
