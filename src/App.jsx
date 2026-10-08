import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';

export default function App() {
  return (
    <div id="top">
      <Navbar />
      <main>
        <Hero />
        <About />
        
      </main>
      <Footer/>
    </div>
  );
}