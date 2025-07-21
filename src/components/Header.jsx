import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "Products", to: "/products" },
    { name: "Artisans", to: "/artisans" },
    { name: "Workshops", to: "/workshops" },
    { name: "Blog", to: "/blog" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-vietnamese-gray-light">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-vietnamese-red to-vietnamese-red-dark rounded-full flex items-center justify-center shadow-md">
                <span className="text-white font-decorative font-bold text-2xl">
                  V
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-decorative text-xl font-bold text-vietnamese-brown-dark">
                  Vietnamese Crafts
                </span>
                <span className="text-xs text-vietnamese-gray font-medium">
                  Traditional Excellence
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className="text-vietnamese-brown-dark hover:text-vietnamese-red font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vietnamese-red transition-all duration-200 group-hover:w-full"></span>
              </NavLink>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="btn-secondary">Login</button>
            <button className="btn-primary">Explore Now</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-vietnamese-gray-light transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6 text-vietnamese-brown-dark"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-vietnamese-gray-light bg-white/98 backdrop-blur-sm">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className="text-vietnamese-brown-dark hover:text-vietnamese-red font-medium transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-vietnamese-cream"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-vietnamese-gray-light">
                <button className="btn-secondary w-full">Login</button>
                <button className="btn-primary w-full">Explore Now</button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
