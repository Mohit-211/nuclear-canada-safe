import { useEffect, useRef, useState } from "react";

const HERO_IMAGES = [
  '/images/hero-radiation-training.jpg',  // Radiation safety training
  '/images/hero-safety-training.jpg',     // Safety training field work
  '/images/hero-field-work.jpg',          // Field radiation monitoring
  '/images/hero-lead-pigs.webp',          // Lead container handling
  '/images/hero-sentinel-gauge.webp',     // Sentinel radiation gauge
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSrc, setCurrentSrc] = useState<string>(HERO_IMAGES[0]);
  const intervalRef = useRef<number | null>(null);
  const CYCLE_MS = 12000; // time per image
  const params = new URLSearchParams(window.location.search);
  const debug = params.get('debug') === '1';
  const cssMode = params.get('heroMode') === 'css';

  useEffect(() => {
    // Preload images
    HERO_IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    intervalRef.current = window.setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % HERO_IMAGES.length;
        setCurrentSrc(HERO_IMAGES[next]);
        return next;
      });
    }, CYCLE_MS);

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, []);


  return (
    <section id="home" className="relative isolate h-[85vh] sm:h-[80vh] min-h-[500px] sm:min-h-[560px]">
      {/* Slideshow Background */}
      <div className="absolute inset-0 -z-10 bg-black">
          <div
            className="hero-slide opacity-100"
            style={{ backgroundImage: `url('${currentSrc}')` }}
          />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 -z-10 bg-black/55" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-red-700/25 to-transparent" />

      {/* Content */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24 lg:py-36">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] leading-tight">
            Expert Radiation Safety & <span className="text-red-300">Compliance Solutions</span>
          </h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-white/90 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
            Trusted consulting and training from former CNSC inspector, Licensing Specialist and Health Physicist - all provinces.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-row gap-3">
            <a 
              href="#contact" 
              className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white text-center shadow-lg hover:bg-red-500 transition-all hover:scale-105 active:scale-95"
            >
              Request a Quote
            </a>
            <a 
              href="https://hazardu.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white text-center shadow-lg hover:bg-red-500 transition-all hover:scale-105 active:scale-95"
            >
              Online Training
            </a>
          </div>
        </div>
      </div>

      {debug && (
        <div className="absolute right-3 top-3 z-10 rounded-md bg-black/60 p-3 text-xs text-white space-y-1">
          <div>mode: simple</div>
          <div>idx: {currentIndex}</div>
          <div>curr: {currentSrc.split('/').pop()}</div>
        </div>
      )}

      <style>{`
        .hero-slide {
          position: absolute;
          inset: 0;
          background-size: contain;
          background-color: hsl(0 0% 0%);
          background-position: center;
          background-repeat: no-repeat;
          transition: opacity 2000ms ease-in-out;
          will-change: opacity;
        }

        .hero-frame {
          position: absolute;
          inset: 0;
          background-size: contain;
          background-color: hsl(0 0% 0%);
          background-position: center;
          background-repeat: no-repeat;
          opacity: 0;
          animation: heroCssFade 40s linear infinite;
          will-change: opacity;
        }

        @keyframes heroCssFade {
          0%, 15% { opacity: 1; }
          20%, 100% { opacity: 0; }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .hero-slide {
            transition: opacity 800ms ease-in-out !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
