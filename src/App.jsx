import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';

export default function App() {
  return (
    <div id="top">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        
      </main>
      <Footer/>
    </div>
  );
}