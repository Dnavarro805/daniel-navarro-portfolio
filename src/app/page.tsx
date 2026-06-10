import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Bio from "@/components/Bio";
import FullbleedPhoto from "@/components/FullbleedPhoto";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import News from "@/components/News";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Bio />
      <FullbleedPhoto />
      <Services />
      <Portfolio />
      <News />
      <Footer />
    </main>
  );
}
