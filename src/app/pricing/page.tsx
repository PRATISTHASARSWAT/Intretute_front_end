import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import PricingHero from './components/PricingHero';
import PricingInteractive from './components/PricingInteractive';
import ROICalculator from './components/ROICalculator';
import ComparisonTable from './components/ComparisonTable';
import SuccessMetrics from './components/SuccessMetrics';
import TrustBadges from './components/TrustBadges';
import FAQSection from './components/FAQSection';
import EnterpriseContact from './components/EnterpriseContact';

export const metadata: Metadata = {
  title: 'Pricing & Plans - SkillPath Academy',
  description: 'Choose the perfect plan for your career transformation. Transparent pricing with 14-day free trial, no credit card required. Join thousands of professionals who have achieved their career goals with SkillPath Academy.',
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-16">
        <PricingHero />
        <TrustBadges />
        <PricingInteractive />
        <SuccessMetrics />
        <ROICalculator />
        <ComparisonTable />
        <EnterpriseContact />
        <FAQSection />
      </div>
    </main>
  );
}