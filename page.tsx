import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import Solutions from "./components/sections/Solutions";
import Features from "./components/sections/Features";
import Programs from "./components/sections/Programs";
import Partners from "./components/sections/Partners";
import Process from "./components/sections/Process";
import Testimonials from "./components/sections/Testimonials";
import FAQ from "./components/sections/FAQ";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Solutions />
      <Features />
      <Programs />
      <Partners />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
