import Header from './components/Header';
import Hero from './components/Hero';
import ValueBlocks from './components/ValueBlocks';
import VelocityMethod from './components/VelocityMethod';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="bg-surface">
      <Header />
      <Hero />
      <ValueBlocks />
      <VelocityMethod />
      <Pricing />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}
