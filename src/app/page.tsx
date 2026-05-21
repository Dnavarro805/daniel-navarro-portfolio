import Hero from "@/components/Hero";
import About from "@/components/About";
import Bio from "@/components/Bio";
import FullbleedPhoto from "@/components/FullbleedPhoto";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import News from "@/components/News";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Bio />
      <FullbleedPhoto />
      <Services />
      <Portfolio />
      <Testimonials />
      <News />
      <Footer />
    </main>
  );
}
