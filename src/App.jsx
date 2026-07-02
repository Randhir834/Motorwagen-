import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import WelcomeModal from '@/components/WelcomeModal/WelcomeModal';
import PageLoader from '@/components/PageLoader/PageLoader';

// Eager load only critical pages
import HomePage from '@/pages/HomePage';

// Lazy load all other pages
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const ServicesPage = lazy(() => import('@/pages/ServicesPage'));
const GalleryPage = lazy(() => import('@/pages/GalleryPage'));
const PricingPage = lazy(() => import('@/pages/PricingPage'));
const TestimonialsPage = lazy(() => import('@/pages/TestimonialsPage'));
const BlogPage = lazy(() => import('@/pages/BlogPage'));
const FAQsPage = lazy(() => import('@/pages/FAQsPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

// Service sub-pages (lazy loaded)
const CeramicCoatingPage = lazy(() => import('@/pages/services/CeramicCoatingPage'));
const PPFPage = lazy(() => import('@/pages/services/PPFPage'));
const CarDetailingPage = lazy(() => import('@/pages/services/CarDetailingPage'));
const CarWashPage = lazy(() => import('@/pages/services/CarWashPage'));
const InteriorDetailingPage = lazy(() => import('@/pages/services/InteriorDetailingPage'));
const BikeDetailingPage = lazy(() => import('@/pages/services/BikeDetailingPage'));

export default function App() {
  return (
    <>
      <WelcomeModal />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/about"
            element={
              <Suspense fallback={<PageLoader />}>
                <AboutPage />
              </Suspense>
            }
          />
          <Route
            path="/services"
            element={
              <Suspense fallback={<PageLoader />}>
                <ServicesPage />
              </Suspense>
            }
          />
          <Route
            path="/services/ceramic-coating"
            element={
              <Suspense fallback={<PageLoader />}>
                <CeramicCoatingPage />
              </Suspense>
            }
          />
          <Route
            path="/services/ppf"
            element={
              <Suspense fallback={<PageLoader />}>
                <PPFPage />
              </Suspense>
            }
          />
          <Route
            path="/services/car-detailing"
            element={
              <Suspense fallback={<PageLoader />}>
                <CarDetailingPage />
              </Suspense>
            }
          />
          <Route
            path="/services/car-wash"
            element={
              <Suspense fallback={<PageLoader />}>
                <CarWashPage />
              </Suspense>
            }
          />
          <Route
            path="/services/interior-detailing"
            element={
              <Suspense fallback={<PageLoader />}>
                <InteriorDetailingPage />
              </Suspense>
            }
          />
          <Route
            path="/services/bike-detailing"
            element={
              <Suspense fallback={<PageLoader />}>
                <BikeDetailingPage />
              </Suspense>
            }
          />
          <Route
            path="/gallery"
            element={
              <Suspense fallback={<PageLoader />}>
                <GalleryPage />
              </Suspense>
            }
          />
          <Route
            path="/pricing"
            element={
              <Suspense fallback={<PageLoader />}>
                <PricingPage />
              </Suspense>
            }
          />
          <Route
            path="/testimonials"
            element={
              <Suspense fallback={<PageLoader />}>
                <TestimonialsPage />
              </Suspense>
            }
          />
          <Route
            path="/blog"
            element={
              <Suspense fallback={<PageLoader />}>
                <BlogPage />
              </Suspense>
            }
          />
          <Route
            path="/faqs"
            element={
              <Suspense fallback={<PageLoader />}>
                <FAQsPage />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<PageLoader />}>
                <ContactPage />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<PageLoader />}>
                <NotFoundPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}
