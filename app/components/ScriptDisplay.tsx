'use client';

import { useState } from 'react';
import { Languages, Copy, Check } from 'lucide-react';
import { ActionCard } from './ActionCard';
import { Button } from './ui/button';

interface ScriptDisplayProps {
  title: string;
  description: string;
  script: {
    english: string;
    spanish: string;
  };
  variant?: 'default' | 'spanish';
}

export function ScriptDisplay({ 
  title, 
  description, 
  script, 
  variant = 'default' 
}: ScriptDisplayProps) {
  const [language, setLanguage] = useState<'english' | 'spanish'>('english');
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(script[language]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ActionCard variant={variant === 'spanish' ? 'highlighted' : 'default'}>
      <div className="space-y-4">
        <div>
          <h3 className="text-heading text-white font-bold">{title}</h3>
          <p className="text-caption text-white/70 mt-1">{description}</p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant={language === 'english' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setLanguage('english')}
            className="text-xs"
          >
            English
          </Button>
          <Button
            variant={language === 'spanish' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setLanguage('spanish')}
            className="text-xs"
          >
            Español
          </Button>
          <Languages className="w-4 h-4 text-white/50" />
        </div>

        <div className="bg-white/10 rounded-md p-3 border border-white/20">
          <p className="text-body text-white leading-relaxed">
            "{script[language]}"
          </p>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={copyToClipboard}
          className="w-full flex items-center gap-2"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          {copied ? 'Copied!' : 'Copy Script'}
        </Button>
      </div>
    </ActionCard>
  );
}
