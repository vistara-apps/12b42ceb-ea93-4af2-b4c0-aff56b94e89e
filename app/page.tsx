'use client';

import { useState, useEffect } from 'react';
import { Shield, BookOpen, AlertCircle, Settings, ChevronRight, Star } from 'lucide-react';
import { FrameContainer } from './components/FrameContainer';
import { ActionCard } from './components/ActionCard';
import { StateSelector } from './components/StateSelector';
import { ScriptDisplay } from './components/ScriptDisplay';
import { RecordButton } from './components/RecordButton';
import { AlertButton } from './components/AlertButton';
import { LinkButton } from './components/LinkButton';
import { Button } from './components/ui/button';
import { BASIC_RIGHTS } from './lib/utils';

type View = 'home' | 'rights' | 'emergency' | 'setup';

export default function Home() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedState, setSelectedState] = useState<string>('');
  const [trustedContact, setTrustedContact] = useState<string>('');

  useEffect(() => {
    // Load saved preferences
    const savedState = localStorage.getItem('pocketrights-state');
    const savedContact = localStorage.getItem('pocketrights-contact');
    
    if (savedState) setSelectedState(savedState);
    if (savedContact) setTrustedContact(savedContact);
  }, []);

  const savePreferences = (state?: string, contact?: string) => {
    if (state) {
      setSelectedState(state);
      localStorage.setItem('pocketrights-state', state);
    }
    if (contact) {
      setTrustedContact(contact);
      localStorage.setItem('pocketrights-contact', contact);
    }
  };

  const handleRecordingStart = () => {
    // In a real app, this would start actual recording and send location
    console.log('Recording started, alert sent to:', trustedContact);
  };

  const handleAlert = () => {
    // In a real app, this would send SMS/notification with location
    console.log('Emergency alert sent to:', trustedContact);
  };

  if (currentView === 'setup') {
    return (
      <FrameContainer>
        <div className="space-y-6 pt-8">
          <div className="text-center">
            <h1 className="text-display text-white font-extrabold">Setup</h1>
            <p className="text-body text-white/70 mt-2">
              Configure your preferences for quick access
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-caption text-white/70 mb-2">
                Select Your State
              </label>
              <StateSelector
                selectedState={selectedState}
                onStateSelect={(state) => savePreferences(state)}
              />
            </div>

            <div>
              <label className="block text-caption text-white/70 mb-2">
                Trusted Contact (Phone)
              </label>
              <ActionCard>
                <input
                  type="tel"
                  value={trustedContact}
                  onChange={(e) => savePreferences(undefined, e.target.value)}
                  placeholder="(555) 123-4567"
                  className="w-full bg-transparent text-white placeholder-white/50 outline-none"
                />
              </ActionCard>
            </div>

            <div className="pt-4">
              <Button
                variant="default"
                size="lg"
                onClick={() => setCurrentView('home')}
                className="w-full"
              >
                Save & Continue
              </Button>
            </div>
          </div>
        </div>
      </FrameContainer>
    );
  }

  if (currentView === 'emergency') {
    return (
      <FrameContainer>
        <div className="space-y-8 pt-8">
          <div className="text-center">
            <h1 className="text-display text-white font-extrabold">Emergency Mode</h1>
            <p className="text-body text-white/70 mt-2">
              Record & alert in one tap
            </p>
          </div>

          <div className="space-y-6">
            <RecordButton
              onRecordingStart={handleRecordingStart}
              onRecordingStop={() => console.log('Recording stopped')}
            />

            <AlertButton
              trustedContact={trustedContact}
              onAlert={handleAlert}
            />

            <ActionCard>
              <div className="text-center space-y-2">
                <h3 className="text-heading text-white font-bold">Quick Script</h3>
                <p className="text-body text-white/90">
                  "I am exercising my right to remain silent. I do not consent to any searches."
                </p>
              </div>
            </ActionCard>

            <div className="pt-4">
              <Button
                variant="outline"
                onClick={() => setCurrentView('home')}
                className="w-full"
              >
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </FrameContainer>
    );
  }

  if (currentView === 'rights') {
    return (
      <FrameContainer>
        <div className="space-y-6 pt-8">
          <div className="text-center">
            <h1 className="text-display text-white font-extrabold">Know Your Rights</h1>
            <p className="text-body text-white/70 mt-2">
              Essential rights cards with scripts
            </p>
          </div>

          <div className="space-y-4">
            {Object.entries(BASIC_RIGHTS).map(([key, right]) => (
              <ScriptDisplay
                key={key}
                title={right.title}
                description={right.description}
                script={right.script}
              />
            ))}
          </div>

          <div className="pt-4">
            <Button
              variant="outline"
              onClick={() => setCurrentView('home')}
              className="w-full"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </FrameContainer>
    );
  }

  return (
    <FrameContainer>
      <div className="space-y-8 pt-8">
        {/* Header */}
        <div className="text-center animate-fade-in">
          <h1 className="text-display text-white font-extrabold">PocketRights</h1>
          <p className="text-body text-white/70 mt-2">
            Know your rights, instantly.
          </p>
        </div>

        {/* Main Actions */}
        <div className="space-y-4">
          <ActionCard
            variant="highlighted"
            onClick={() => setCurrentView('emergency')}
            className="animate-slide-up"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-heading text-white font-bold">Emergency Mode</h3>
                  <p className="text-caption text-white/70">Record & alert instantly</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-white/50" />
            </div>
          </ActionCard>

          <ActionCard 
            onClick={() => setCurrentView('rights')}
            className="animate-slide-up"
            style={{ animationDelay: '0.1s' }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-heading text-white font-bold">Rights Cards</h3>
                  <p className="text-caption text-white/70">Quick access scripts</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-white/50" />
            </div>
          </ActionCard>

          <ActionCard 
            onClick={() => setCurrentView('setup')}
            className="animate-slide-up"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Settings className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-heading text-white font-bold">Setup</h3>
                  <p className="text-caption text-white/70">State & contact info</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-white/50" />
            </div>
          </ActionCard>
        </div>

        {/* State Info */}
        {selectedState && (
          <ActionCard className="animate-fade-in">
            <div className="text-center space-y-2">
              <h3 className="text-heading text-white font-bold">
                {selectedState} Laws
              </h3>
              <p className="text-caption text-white/70">
                State-specific legal information available
              </p>
              <div className="flex items-center justify-center gap-1 text-yellow-400">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-caption">Premium Feature</span>
              </div>
            </div>
          </ActionCard>
        )}

        {/* Footer */}
        <div className="text-center space-y-4 animate-fade-in">
          <p className="text-caption text-white/50">
            Get your legal information for on the moment or checklist at enter for an law form.
          </p>
          <div className="space-y-2">
            <LinkButton href="/resources" variant="outline">
              <BookOpen className="w-4 h-4" />
              Legal Resources
            </LinkButton>
          </div>
        </div>
      </div>
    </FrameContainer>
  );
}
