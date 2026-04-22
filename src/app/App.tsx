import { HeroSection } from './components/HeroSection';
import { KPIStrip } from './components/KPIStrip';
import { GISSection } from './components/GISSection';
import { AIAnalyticsSection } from './components/AIAnalyticsSection';
import { WorkflowSection } from './components/WorkflowSection';
import { DashboardPreview } from './components/DashboardPreview';
import { EnvironmentalSection } from './components/EnvironmentalSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <KPIStrip />
      <GISSection />
      <AIAnalyticsSection />
      <WorkflowSection />
      <DashboardPreview />
      <EnvironmentalSection />
      <CTASection />
      <Footer />
    </div>
  );
}