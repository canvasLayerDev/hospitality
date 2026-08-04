import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Properties } from './components/Properties';
import { Amenities } from './components/Amenities';
import { EventManagement } from './components/EventManagement';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { LocationMap } from './components/LocationMap';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export function App() {
  return (
    <div className="min-h-screen bg-white text-[color:var(--color-charcoal)] font-sans antialiased selection:bg-[color:var(--color-royal-dark)] selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Properties />
        <Gallery />
        <Amenities />
        <EventManagement />
        <Testimonials />
        <LocationMap />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

export default App;
