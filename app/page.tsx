import Navbar from '@/components/Navbar';
import RiceJourney from '@/components/RiceJourney';
import About from '@/components/About';
import Products from '@/components/Products';
import BinSultan from '@/components/BinSultan';
import Processing from '@/components/Processing';
import Capacity from '@/components/Capacity';
import GlobalReach from '@/components/GlobalReach';
import PrivateLabel from '@/components/PrivateLabel';
import QuoteForm from '@/components/QuoteForm';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Signature scroll-scrubbed rice journey */}
        <RiceJourney />

        {/* Narrative */}
        <About />
        <Products />
        <BinSultan />
        <Processing />
        <Capacity />
        <GlobalReach />
        <PrivateLabel />
        <QuoteForm />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
