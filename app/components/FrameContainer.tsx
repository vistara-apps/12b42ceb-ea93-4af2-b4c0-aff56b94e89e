'use client';

import { cn } from "@/app/lib/utils";

interface FrameContainerProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default';
}

export function FrameContainer({ 
  children, 
  className, 
  variant = 'default' 
}: FrameContainerProps) {
  return (
    <div className={cn(
      "min-h-screen gradient-bg",
      variant === 'default' && "p-4",
      className
    )}>
      <div className="max-w-lg mx-auto">
        {children}
      </div>
    </div>
  );
}
