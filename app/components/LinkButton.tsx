'use client';

import { ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'default' | 'outline';
  external?: boolean;
}

export function LinkButton({ 
  href, 
  children, 
  variant = 'default',
  external = false 
}: LinkButtonProps) {
  return (
    <a 
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="w-full"
    >
      <Button
        variant={variant}
        className="w-full flex items-center gap-2"
      >
        {children}
        {external && <ExternalLink className="w-4 h-4" />}
      </Button>
    </a>
  );
}
