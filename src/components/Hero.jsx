import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-pattern"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-vietnamese-cream via-white to-vietnamese-gold-light opacity-95"></div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-vietnamese-red/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-vietnamese-gold/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-1/2 left-20 w-24 h-24 bg-vietnamese-green/10 rounded-full blur-lg"></div>
      <div className="absolute top-1/3 right-20 w-20 h-20 bg-vietnamese-blue/10 rounded-full blur-lg"></div>

      {/* Main Content */}
      <div className="container-custom relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="heading-primary mb-6">
            Discover the Soul of{" "}
            <span className="bg-gradient-to-r from-vietnamese-red to-vietnamese-red-dark bg-clip-text text-transparent">
              Vietnamese
            </span>{" "}
            Craftsmanship
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-vietnamese-gray-dark mb-8 leading-relaxed">
            Shop unique, authentic, handmade products directly from artisans
            across{" "}
            <span className="text-accent font-semibold">
              traditional Vietnamese villages
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/products">
              <button className="btn-primary text-lg px-8 py-4">
                Browse Collections
              </button>
            </Link>
            <Link to="/workshops">
              <button className="btn-accent text-lg px-8 py-4">
                Join a Workshop
              </button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-vietnamese-gray">
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <div className="w-3 h-3 bg-vietnamese-green rounded-full"></div>
              <span className="font-medium">100% Authentic</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <div className="w-3 h-3 bg-vietnamese-green rounded-full"></div>
              <span className="font-medium">Direct from Artisans</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
              <div className="w-3 h-3 bg-vietnamese-green rounded-full"></div>
              <span className="font-medium">Cultural Heritage</span>
            </div>
          </div>
        </div>
      </div>

      {/* Artisan Silhouette */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-64 md:w-80 md:h-80 opacity-20">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path
            d="M100 20 C 120 20, 140 40, 140 60 C 140 80, 120 100, 100 100 C 80 100, 60 80, 60 60 C 60 40, 80 20, 100 20 Z"
            fill="none"
            stroke="#8B4513"
            strokeWidth="2"
          />
          <path
            d="M100 100 L 100 180"
            fill="none"
            stroke="#8B4513"
            strokeWidth="2"
          />
          <path
            d="M80 140 L 120 140"
            fill="none"
            stroke="#8B4513"
            strokeWidth="2"
          />
          <path
            d="M70 160 L 130 160"
            fill="none"
            stroke="#8B4513"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-vietnamese-red/20 rounded-full animate-bounce"></div>
      <div
        className="absolute top-3/4 right-1/4 w-12 h-12 bg-vietnamese-gold/20 rounded-full animate-bounce"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-1/4 left-1/3 w-8 h-8 bg-vietnamese-green/20 rounded-full animate-bounce"
        style={{ animationDelay: "2s" }}
      ></div>
    </section>
  );
};

export default Hero;
