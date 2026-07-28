/* =============================================
 * Home Page — Komposisi semua section
 * ============================================= */

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Statistics from '../components/Statistics';
import Projects from '../components/Projects';
import Clients from '../components/Clients';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import FloatingWA from '../components/FloatingWA';

const Home = ({ darkMode, toggleDarkMode }) => {
  return (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Statistics />
      <Projects />
      <Clients />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
      <FloatingWA />
    </>
  );
};

export default Home;
