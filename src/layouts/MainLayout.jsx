import { Outlet } from 'react-router-dom';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import FloatingButtons from '@/components/FloatingButtons/FloatingButtons';

/**
 * MainLayout — wraps every page with Navbar, Footer, and FloatingButtons.
 * The <Outlet /> renders the matched page component.
 */
export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-black">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <FloatingButtons />
      <Footer />
    </div>
  );
}
