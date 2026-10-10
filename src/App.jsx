import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Services from './sections/Services';
import Testimonials from './sections/Testimonials';

export default function App() {
  return (
    <div id="top">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Testimonials />
        
      </main>
      <Footer/>
    </div>
  );
}