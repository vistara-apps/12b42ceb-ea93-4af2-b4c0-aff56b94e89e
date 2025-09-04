'use client';

import { ArrowLeft, ExternalLink, Book, Phone, Globe } from 'lucide-react';
import { FrameContainer } from '../components/FrameContainer';
import { ActionCard } from '../components/ActionCard';
import { LinkButton } from '../components/LinkButton';
import { Button } from '../components/ui/button';

export default function ResourcesPage() {
  return (
    <FrameContainer>
      <div className="space-y-6 pt-8">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => window.history.back()}
            className="text-white hover:bg-white/10"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div>
            <h1 className="text-display text-white font-extrabold">Legal Resources</h1>
            <p className="text-body text-white/70 mt-1">
              Additional support and information
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <ActionCard>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-heading text-white font-bold">Emergency Contacts</h3>
                <div className="space-y-1 text-caption text-white/70">
                  <p>Emergency: 911</p>
                  <p>ACLU Know Your Rights: 1-877-243-8511</p>
                  <p>Legal Aid: 211 (dial 2-1-1)</p>
                </div>
              </div>
            </div>
          </ActionCard>

          <ActionCard>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Book className="w-5 h-5 text-accent" />
              </div>
              <div className="space-y-3">
                <h3 className="text-heading text-white font-bold">Know Your Rights Guides</h3>
                <div className="space-y-2">
                  <LinkButton 
                    href="https://www.aclu.org/know-your-rights/stopped-by-police/" 
                    variant="outline"
                    external
                  >
                    ACLU: Stopped by Police
                  </LinkButton>
                  <LinkButton 
                    href="https://www.eff.org/issues/know-your-rights" 
                    variant="outline"
                    external
                  >
                    EFF: Digital Rights
                  </LinkButton>
                </div>
              </div>
            </div>
          </ActionCard>

          <ActionCard>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="w-5 h-5 text-yellow-500" />
              </div>
              <div className="space-y-3">
                <h3 className="text-heading text-white font-bold">Legal Aid Organizations</h3>
                <div className="space-y-2">
                  <LinkButton 
                    href="https://www.lsc.gov/find-legal-aid" 
                    variant="outline"
                    external
                  >
                    Find Local Legal Aid
                  </LinkButton>
                  <LinkButton 
                    href="https://www.nlada.org/find-legal-aid" 
                    variant="outline"
                    external
                  >
                    National Legal Aid Directory
                  </LinkButton>
                </div>
              </div>
            </div>
          </ActionCard>

          <ActionCard variant="highlighted">
            <div className="text-center space-y-3">
              <h3 className="text-heading text-white font-bold">Disclaimer</h3>
              <p className="text-caption text-white/70">
                This app provides general information and should not be considered legal advice. 
                Always consult with a qualified attorney for specific legal questions.
              </p>
            </div>
          </ActionCard>
        </div>
      </div>
    </FrameContainer>
  );
}
