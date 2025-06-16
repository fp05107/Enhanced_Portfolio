import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { BackgroundEffects } from '@/components/background-effects';
import { DataStreamVisualizer } from '@/components/data-stream-visualizer';
import { AudioController } from '@/components/audio-controller';
import { AIAssistant } from '@/components/ai-assistant';
import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { SkillsSection } from '@/components/skills-section';
import { ProjectsSection } from '@/components/projects-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';

export default function Home() {
  useScrollAnimation();

  return (
    <div className="bg-dark-bg text-white font-inter overflow-x-hidden">
      <DataStreamVisualizer />
      <BackgroundEffects />
      <AudioController />
      <AIAssistant />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
