import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from "@/components/ui/sonner";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import Portfolio from '@/pages/Portfolio';
import Solutions from '@/pages/Solutions';
import About from '@/pages/About';
import Careers from '@/pages/Careers';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';
import Admin from '@/pages/Admin';
import AdminLogin from '@/pages/AdminLogin';
import AdminPortfolio from '@/pages/AdminPortfolio';
import AdminTeam from '@/pages/AdminTeam';

const AdminLayout = ({ children }: { children: React.ReactNode }) => <>{children}</>;

/* Cinematic scroll reveal — elements with .reveal rise into view once as they
   enter the viewport. A MutationObserver picks up nodes rendered after data
   loads (e.g. the portfolio grid). Reduced-motion users see content instantly
   via the CSS override. */
const useScrollReveal = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );

    const observeAll = () =>
      document.querySelectorAll('.reveal:not(.in-view)').forEach((el) => io.observe(el));

    observeAll();
    const mo = new MutationObserver(observeAll);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      io.disconnect();
    };
  }, [location.pathname]);
};

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  useScrollReveal();
  return (
    <div className="min-h-screen bg-[#04070f] flex flex-col">
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router basename="/MediaPRO">
      <Routes>
        {/* Admin routes — no nav/footer */}
        <Route path="/admin/login" element={<AdminLayout><AdminLogin /></AdminLayout>} />
        <Route path="/admin" element={<AdminLayout><Admin /></AdminLayout>} />
        <Route path="/admin/portfolio" element={<AdminLayout><AdminPortfolio /></AdminLayout>} />
        <Route path="/admin/team" element={<AdminLayout><AdminTeam /></AdminLayout>} />

        {/* Public routes */}
        <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
        <Route path="/portfolio" element={<PublicLayout><Portfolio /></PublicLayout>} />
        <Route path="/solutions" element={<PublicLayout><Solutions /></PublicLayout>} />
        <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
        <Route path="/careers" element={<PublicLayout><Careers /></PublicLayout>} />
        <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />
        <Route path="*" element={<PublicLayout><NotFound /></PublicLayout>} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
