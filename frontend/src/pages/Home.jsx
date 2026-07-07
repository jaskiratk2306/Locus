import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import globe from '../assets/globe.gif';
import loginbg from '../assets/loginbg.png'; // Will use as a subtle overlay

// Simple intersection observer hook for scroll fade-in
const useFadeIn = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState(null);

  useEffect(() => {
    if (!ref) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref]);

  return [setRef, isVisible];
};

const FadeSection = ({ children, delay = '' }) => {
  const [setRef, isVisible] = useFadeIn();
  return (
    <div
      ref={setRef}
      className={`transition-all duration-1000 transform ${delay} ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};

const Home = () => {
  return (
    <div className="bg-brand-bg text-brand-dark font-body min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 z-10 text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold font-heading leading-tight mb-6 text-brand-dark">
              Your World, <br/>
              <span className="text-brand-primary">Mapped to Perfection</span>
            </h1>
            <p className="text-lg lg:text-xl text-brand-dark/80 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Experience the next generation of cartography. Discover new places, find the optimal route, and navigate with confidence using our interactive global reference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/explore" className="px-8 py-4 bg-brand-primary text-white rounded-full font-medium text-lg hover:bg-brand-secondary transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Start Exploring
              </Link>
              <a href="#how-it-works" className="px-8 py-4 bg-white text-brand-dark rounded-full font-medium text-lg border border-brand-dark/10 hover:border-brand-primary hover:text-brand-primary transition-all">
                Learn How
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative flex justify-center z-10">
            <div className="absolute inset-0 bg-brand-surface rounded-full blur-3xl opacity-50 animate-pulse"></div>
            <img 
              src={globe}
              alt="Interactive World Map"
              className="relative w-full max-w-[500px] h-auto object-contain animate-float drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-24 bg-white px-4 sm:px-6 lg:px-8" id="features">
        <div className="max-w-7xl mx-auto">
          <FadeSection>
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold tracking-widest text-brand-secondary uppercase mb-3">Capabilities</h2>
              <h3 className="text-3xl md:text-5xl font-bold font-heading text-brand-dark">Everything you need to navigate.</h3>
            </div>
          </FadeSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '📍', title: 'Instant Search', desc: 'Find cities, landmarks, or precise addresses in milliseconds.' },
              { icon: '🗺️', title: 'Optimized Routes', desc: 'Get the fastest path whether you are driving, walking, or cycling.' },
              { icon: '🌍', title: 'Hidden Gems', desc: 'Discover local restaurants, ATMs, and attractions around you.' },
              { icon: '⏰', title: 'Live Estimates', desc: 'See accurate time and distance metrics for any planned trip.' }
            ].map((feature, idx) => (
              <FadeSection key={idx} delay={`delay-[${idx * 150}ms]`}>
                <div className="bg-brand-surface/40 p-8 rounded-2xl border border-brand-surface hover:border-brand-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg h-full group">
                  <div className="text-4xl mb-6 bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-bold font-heading mb-3 text-brand-dark">{feature.title}</h4>
                  <p className="text-brand-dark/70 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-bg" id="how-it-works">
        <div className="max-w-7xl mx-auto">
          <FadeSection>
            <div className="text-center mb-20">
              <h2 className="text-sm font-bold tracking-widest text-brand-secondary uppercase mb-3">Simple Process</h2>
              <h3 className="text-3xl md:text-5xl font-bold font-heading text-brand-dark">How GeoMap works</h3>
            </div>
          </FadeSection>
          
          <div className="flex flex-col md:flex-row gap-12 relative">
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-brand-surface/80 z-0"></div>
            
            {[
              { num: '01', title: 'Search Location', text: 'Enter any address or landmark in our powerful search bar.' },
              { num: '02', title: 'View Details', text: 'Instantly see the area rendered with high-fidelity map tiles.' },
              { num: '03', title: 'Find Route', text: 'Click directions to get the most efficient path to your destination.' }
            ].map((step, idx) => (
              <FadeSection key={idx} delay={`delay-[${idx * 200}ms]`}>
                <div className="flex flex-col items-center text-center relative z-10 flex-1">
                  <div className="w-24 h-24 rounded-full bg-brand-primary text-white flex items-center justify-center text-3xl font-bold font-heading mb-6 shadow-xl ring-8 ring-brand-bg">
                    {step.num}
                  </div>
                  <h4 className="text-2xl font-bold font-heading mb-4 text-brand-dark">{step.title}</h4>
                  <p className="text-brand-dark/80 max-w-xs">{step.text}</p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials / Use Cases */}
      <section className="py-24 bg-brand-surface/30 px-4 sm:px-6 lg:px-8 border-y border-brand-surface">
        <div className="max-w-7xl mx-auto">
          <FadeSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-dark">Loved by Explorers Worldwide</h2>
            </div>
          </FadeSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { quote: "GeoMap completely changed how I plan my road trips. The routing is incredibly accurate.", name: "Sarah Jenkins", role: "Travel Blogger" },
              { quote: "As a delivery driver, I rely on fast, responsive maps. This platform has never let me down.", name: "Marcus Wright", role: "Logistics Pro" },
              { quote: "The clean UI and fast search make it my go-to reference for geography projects.", name: "Elena Rostova", role: "Educator" }
            ].map((test, i) => (
              <FadeSection key={i} delay={`delay-[${i * 150}ms]`}>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-brand-dark/5 h-full">
                  <div className="flex text-brand-secondary mb-4">
                    ★★★★★
                  </div>
                  <p className="text-lg text-brand-dark/80 italic mb-6">"{test.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-surface rounded-full flex items-center justify-center font-bold text-brand-primary">
                      {test.name[0]}
                    </div>
                    <div>
                      <h5 className="font-bold text-brand-dark">{test.name}</h5>
                      <span className="text-sm text-brand-dark/60">{test.role}</span>
                    </div>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <FadeSection>
            <div className="bg-brand-dark rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary rounded-full blur-[100px] opacity-40"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-secondary rounded-full blur-[100px] opacity-40"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold font-heading text-brand-bg mb-6">Ready to navigate differently?</h2>
                <p className="text-xl text-brand-bg/80 mb-10 max-w-2xl mx-auto">
                  Join thousands of users who trust GeoMap Reference for their daily navigation and geographical needs.
                </p>
                <Link to="/register" className="inline-block px-10 py-4 bg-brand-primary text-white rounded-full font-bold text-lg hover:bg-brand-secondary transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Create Free Account
                </Link>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark text-brand-bg py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center text-white font-bold">
              G
            </div>
            <span className="text-xl font-bold font-heading tracking-tight">Geo<span className="text-brand-primary">Map</span></span>
          </div>
          <div className="flex gap-6 text-brand-bg/70 text-sm">
            <Link to="/about" className="hover:text-brand-secondary transition-colors">About Us</Link>
            <Link to="/contact" className="hover:text-brand-secondary transition-colors">Contact</Link>
            <Link to="/privacy" className="hover:text-brand-secondary transition-colors">Privacy Policy</Link>
          </div>
          <p className="text-brand-bg/50 text-sm">&copy; 2026 Geo Map Reference. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
