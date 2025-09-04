'use client';

import { useState } from 'react';
import { ChevronDown, MapPin } from 'lucide-react';
import { US_STATES } from '@/app/lib/utils';
import { ActionCard } from './ActionCard';

interface StateSelectorProps {
  onStateSelect: (state: string) => void;
  selectedState?: string;
  variant?: 'default';
}

export function StateSelector({ 
  onStateSelect, 
  selectedState, 
  variant = 'default' 
}: StateSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  const selectedStateLabel = US_STATES.find(s => s.value === selectedState)?.label;

  return (
    <div className="relative">
      <ActionCard
        variant={variant}
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer"
      >
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <span className="text-body">
              {selectedStateLabel || 'Select Your State'}
            </span>
          </div>
          <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} />
        </div>
      </ActionCard>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 max-h-60 overflow-y-auto glass-card rounded-lg shadow-card z-50 animate-slide-up">
          {US_STATES.map((state) => (
            <div
              key={state.value}
              className="p-3 text-white hover:bg-white/20 cursor-pointer transition-colors border-b border-white/10 last:border-b-0"
              onClick={() => {
                onStateSelect(state.value);
                setIsOpen(false);
              }}
            >
              {state.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
