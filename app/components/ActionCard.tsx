'use client';

import { cn } from "@/app/lib/utils";

interface ActionCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'highlighted';
  onClick?: () => void;
}

export function ActionCard({ 
  children, 
  className, 
  variant = 'default',
  onClick 
}: ActionCardProps) {
  return (
    <div 
      className={cn(
        "glass-card rounded-lg p-lg shadow-card transition-all duration-200 ease-in-out",
        variant === 'default' && "hover:bg-white/20",
        variant === 'highlighted' && "bg-accent/20 border-accent/40",
        onClick && "cursor-pointer hover:scale-[1.02]",
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
