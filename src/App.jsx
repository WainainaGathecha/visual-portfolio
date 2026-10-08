import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';

export default function App() {
  return (
    <div id="top">
      <Navbar />
      <main>
        <Hero />
        
      </main>
      <Footer/>
    </div>
  );
}