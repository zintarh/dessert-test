import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import OnePlatformSection from './components/OnePlatformSection';
import TestimonialSection from './components/TestimonialSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import PageAnimation from './components/PageAnimation';

export default function Home() {
  return (
    <div className="min-h-screen">
      <PageAnimation>
        <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <Navbar />
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <HeroSection />
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <OnePlatformSection />
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <TestimonialSection />
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <FAQSection />
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Footer />
        </div>
      </PageAnimation>
    </div>
  );
}
