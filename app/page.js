import CTASection from "@/components/CTASection";
import GetInTouch from "@/components/GetInTouch";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import ServicesSection from "@/components/ServicesSection";
import Skills from "@/components/Skills";

export default function Home() {

  return (
    <>
      <Hero />
      <ServicesSection />
      <Services />
      <CTASection />
      <Skills />
      <Projects />
      <GetInTouch />
    </>

  );
}
