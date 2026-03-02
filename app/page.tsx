import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ControlSection from './components/ControlSection';
import TikTokSection from './components/TikTokSection';
import TwitterSection from './components/TwitterSection';
import FacebookSection from './components/FacebookSection';
import InstagramSection from './components/InstagramSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ControlSection />
      <TikTokSection />
      <TwitterSection />
      <FacebookSection />
      <InstagramSection />
      <PricingSection />
      <Footer />
    </div>
  );
}
