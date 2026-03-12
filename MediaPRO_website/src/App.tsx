import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

const PublicLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-background flex flex-col">
    <Navigation />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

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
