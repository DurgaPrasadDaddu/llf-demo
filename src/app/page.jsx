
import Navbar from "@/components/SharedComponents/Navbar";
import Footer from "@/components/SharedComponents/Footer";
import HeroSection from "@/components/Home/Hero";
import AboutSection from "@/components/Home/AboutSection";
import ServicesSection from "@/components/Home/ServicesSection";
import Testimonials from "@/components/Home/Testimonials";
import VillaHero from "@/components/Home/VillaHero";
import ContactSection from "@/components/Home/ContactSection";
import ProjectsSection from "@/components/Home/ProjectsSection";
// import Others from "@/components/Home/Others";
export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <ServicesSection/>
      <Testimonials/>
      <ProjectsSection/>
      <ContactSection/>
      <VillaHero/>
      <Footer/>
      {/* <Others/> */}
    </div>
  );
}
