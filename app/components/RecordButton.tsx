'use client';

import { useState, useEffect } from 'react';
import { Mic, Square, Play } from 'lucide-react';
import { Button } from './ui/button';

interface RecordButtonProps {
  variant?: 'active' | 'inactive';
  onRecordingStart?: () => void;
  onRecordingStop?: () => void;
}

export function RecordButton({ 
  variant = 'inactive',
  onRecordingStart,
  onRecordingStop 
}: RecordButtonProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isRecording) {
      interval = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
    } else {
      setRecordingTime(0);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRecording]);

  const handleToggleRecording = () => {
    if (isRecording) {
      setIsRecording(false);
      onRecordingStop?.();
    } else {
      setIsRecording(true);
      onRecordingStart?.();
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="text-center space-y-4">
      <Button
        variant={isRecording ? "destructive" : "default"}
        size="lg"
        onClick={handleToggleRecording}
        className={`w-24 h-24 rounded-full shadow-lg transition-all duration-200 ${
          isRecording 
            ? 'bg-red-500 hover:bg-red-600 animate-pulse' 
            : 'bg-accent hover:bg-accent/90'
        }`}
      >
        {isRecording ? (
          <Square className="w-8 h-8" />
        ) : (
          <Mic className="w-8 h-8" />
        )}
      </Button>

      {isRecording && (
        <div className="text-white animate-fade-in">
          <p className="text-caption text-white/70">Recording</p>
          <p className="text-heading font-mono">{formatTime(recordingTime)}</p>
        </div>
      )}

      <p className="text-caption text-white/70 max-w-sm mx-auto">
        {isRecording 
          ? "Tap to stop recording. Your trusted contact has been notified."
          : "Tap to start recording and alert your trusted contact."
        }
      </p>
    </div>
  );
}
