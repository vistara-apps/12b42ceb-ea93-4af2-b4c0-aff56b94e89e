'use client';

import { useState } from 'react';
import { AlertTriangle, Phone, Check } from 'lucide-react';
import { Button } from './ui/button';

interface AlertButtonProps {
  variant?: 'default' | 'discreet';
  trustedContact?: string;
  onAlert?: () => void;
}

export function AlertButton({ 
  variant = 'default',
  trustedContact,
  onAlert 
}: AlertButtonProps) {
  const [alertSent, setAlertSent] = useState(false);

  const handleSendAlert = () => {
    setAlertSent(true);
    onAlert?.();
    
    // Reset after 3 seconds
    setTimeout(() => {
      setAlertSent(false);
    }, 3000);
  };

  return (
    <div className="space-y-3">
      <Button
        variant={alertSent ? "secondary" : variant === 'discreet' ? "ghost" : "destructive"}
        size="lg"
        onClick={handleSendAlert}
        disabled={alertSent}
        className={`w-full transition-all duration-200 ${
          variant === 'discreet' 
            ? 'bg-white/10 hover:bg-white/20 text-white' 
            : ''
        }`}
      >
        <div className="flex items-center gap-2">
          {alertSent ? (
            <Check className="w-5 h-5" />
          ) : (
            <AlertTriangle className="w-5 h-5" />
          )}
          {alertSent ? 'Alert Sent' : 'Send Alert'}
        </div>
      </Button>

      {trustedContact && (
        <div className="flex items-center gap-2 text-white/70 text-caption justify-center">
          <Phone className="w-4 h-4" />
          <span>Contact: {trustedContact}</span>
        </div>
      )}

      <p className="text-caption text-white/50 text-center text-xs">
        Sends your location and a pre-defined message to your trusted contact.
      </p>
    </div>
  );
}
