import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import OnePlatformSection from './components/OnePlatformSection';
import TestimonialSection from './components/TestimonialSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import PageAnimation from './components/PageAnimation';
import AnimatedSection from './components/AnimatedSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <PageAnimation>
        {/* Navbar - Quick fade in */}
        <AnimatedSection animationType="fadeIn" delay={100} duration={600}>
          <Navbar />
        </AnimatedSection>

        {/* Hero Section - Scale in with slight delay */}
        <AnimatedSection animationType="scaleIn" delay={200} duration={1000}>
          <HeroSection />
        </AnimatedSection>

        {/* One Platform Section - Fade in from left */}
        <AnimatedSection animationType="fadeInLeft" delay={300} duration={1200}>
          <OnePlatformSection />
        </AnimatedSection>

        {/* Testimonial Section - Fade in from right */}
        <AnimatedSection animationType="fadeInRight" delay={400} duration={1200}>
          <TestimonialSection />
        </AnimatedSection>

        {/* FAQ Section - Fade in up */}
        <AnimatedSection animationType="fadeInUp" delay={500} duration={1000}>
          <FAQSection />
        </AnimatedSection>

        {/* Footer - Simple fade in */}
        <AnimatedSection animationType="fadeIn" delay={600} duration={800}>
          <Footer />
        </AnimatedSection>
      </PageAnimation>
    </div>
  );
}
