import FeaturedCources from "@/components/FeaturedCources";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import TestimorialSection from "@/components/TestimorialSection";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChoose from "@/components/WhyChoose";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
     
      <HeroSection/>
      <FeaturedCources/>
      <WhyChoose/>
      <TestimorialSection/>
      <UpcomingWebinars/>
      <Instructors/>
      <Footer/>
    </main>
  );
}
