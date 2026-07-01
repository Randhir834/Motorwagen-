import { Routes, Route } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';

// Pages
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ServicesPage from '@/pages/ServicesPage';
import GalleryPage from '@/pages/GalleryPage';
import PricingPage from '@/pages/PricingPage';
import TestimonialsPage from '@/pages/TestimonialsPage';
import BlogPage from '@/pages/BlogPage';
import FAQsPage from '@/pages/FAQsPage';
import ContactPage from '@/pages/ContactPage';
import BookAppointmentPage from '@/pages/BookAppointmentPage';
import NotFoundPage from '@/pages/NotFoundPage';

// Service sub-pages
import CeramicCoatingPage from '@/pages/services/CeramicCoatingPage';
import PPFPage from '@/pages/services/PPFPage';
import CarDetailingPage from '@/pages/services/CarDetailingPage';
import CarWashPage from '@/pages/services/CarWashPage';
import InteriorDetailingPage from '@/pages/services/InteriorDetailingPage';
import BikeDetailingPage from '@/pages/services/BikeDetailingPage';

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/ceramic-coating" element={<CeramicCoatingPage />} />
        <Route path="/services/ppf" element={<PPFPage />} />
        <Route path="/services/car-detailing" element={<CarDetailingPage />} />
        <Route path="/services/car-wash" element={<CarWashPage />} />
        <Route path="/services/interior-detailing" element={<InteriorDetailingPage />} />
        <Route path="/services/bike-detailing" element={<BikeDetailingPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/faqs" element={<FAQsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/book-appointment" element={<BookAppointmentPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
