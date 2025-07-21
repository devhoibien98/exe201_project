import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import FeaturedCategories from "./components/FeaturedCategories";
import FeaturedArtisans from "./components/FeaturedArtisans";
import UpcomingWorkshops from "./components/UpcomingWorkshops";
import Testimonials from "./components/Testimonials";
import BlogPage from "./components/BlogPage";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import ProductsPage from "./components/ProductsPage";
import ArtisansPage from "./components/ArtisansPage";
import WorkshopsPage from "./components/WorkshopsPage";
import ContactPage from "./components/ContactPage";

// Các page tạm thời
const Home = () => (
  <>
    <Hero />
    <About />
    <FeaturedCategories />
    <FeaturedArtisans />
    <UpcomingWorkshops />
    <Testimonials />
    <BlogPage />
    <CallToAction />
  </>
);
const Artisans = () => (
  <div className="p-8">Trang Nghệ nhân (đang phát triển)</div>
);
const Workshops = () => (
  <div className="p-8">Trang Workshop (đang phát triển)</div>
);
const Contact = () => (
  <div className="p-8">Trang Liên hệ (đang phát triển)</div>
);

function App() {
  return (
    <div className="min-h-screen bg-vietnamese-beige">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/artisans" element={<ArtisansPage />} />
        <Route path="/workshops" element={<WorkshopsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
