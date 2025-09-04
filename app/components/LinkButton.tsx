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
    <Button
      variant={variant}
      asChild
      className="w-full"
    >
      <a 
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="flex items-center gap-2"
      >
        {children}
        {external && <ExternalLink className="w-4 h-4" />}
      </a>
    </Button>
  );
}
