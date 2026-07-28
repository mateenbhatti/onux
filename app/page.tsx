import FrameStage from '@/components/FrameStage/FrameStage';
import ScrollController from '@/components/ScrollController/ScrollController';
import PointerTracker from '@/components/ScrollController/PointerTracker';
import CustomCursor from '@/components/CustomCursor/CustomCursor';
import Preloader from '@/components/Preloader/Preloader';
import Navigation from '@/components/Navigation/Navigation';
import Hero from '@/components/Hero/Hero';
import PerformanceSection from '@/components/PerformanceSection/PerformanceSection';
import EngineeringSection from '@/components/EngineeringSection/EngineeringSection';
import Services from '@/components/Services/Services';
import WhyUs from '@/components/WhyUs/WhyUs';
import Workshop from '@/components/Workshop/Workshop';
import Booking from '@/components/Booking/Booking';
import Footer from '@/components/Footer/Footer';
import Reveal from '@/components/util/Reveal';
import { asset } from '@/lib/content';

export default function Home() {
  return (
    <>
      {/* The film: one pinned canvas that scrubs with scroll + pointer. */}
      <FrameStage />

      {/* Motion + input controllers (render nothing). */}
      <ScrollController />
      <PointerTracker />
      <Reveal />

      {/* Chrome */}
      <Preloader />
      <CustomCursor />
      <Navigation />

      <main className="relative">
        {/* Contiguous cinematic block — its scroll range drives the camera. */}
        <div id="cinematic-block">
          <Hero />
          <PerformanceSection />
          <EngineeringSection />
        </div>

        {/* Opaque narrative panels cover the canvas. */}
        <Services />
        <WhyUs />

        {/* Canvas re-reveals for the closing pull-back. */}
        <Workshop />
        <Booking />
        <Footer />
      </main>

      {/* Graceful fallback if JS/canvas is unavailable. */}
      <noscript>
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: '#050608',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 200,
          }}
        >
          <video
            src={asset('/videos/workshop.mp4')}
            poster={asset('/poster.webp')}
            autoPlay
            muted
            loop
            playsInline
            style={{ maxWidth: '100%', maxHeight: '100%' }}
          />
        </div>
      </noscript>
    </>
  );
}
