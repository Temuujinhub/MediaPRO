import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'About', path: '/about' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact', path: '/contact' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#04070f]/85 backdrop-blur-xl shadow-lg shadow-black/30 border-b border-white/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 py-2">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src="./images/media PRO logo NOTEXT.png"
              alt="Mediapro"
              className="h-12 w-auto brightness-0 invert"
            />
            <span className="text-2xl font-bold text-white tracking-tight uppercase">
              Media<span className="gradient-text">PRO</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-lg text-sm font-semibold uppercase tracking-wider transition-all duration-150 ${
                  isActive(item.path)
                    ? 'text-[#38bdf8] bg-[#38bdf8]/10'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile trigger */}
          <div className="flex items-center gap-3">
            <Link to="/contact" className="hidden md:inline-flex">
              <span className="btn-pg !px-6 !py-2.5">Contact Us</span>
            </Link>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="text-white/80 hover:text-white hover:bg-white/10">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] p-0 bg-[#081120] border-white/10 text-white">
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10">
                    <img src="./images/media PRO logo NOTEXT.png" alt="Mediapro" className="h-10 w-auto brightness-0 invert" />
                    <span className="text-xl font-bold text-white uppercase">Media<span className="gradient-text">PRO</span></span>
                  </div>
                  <div className="flex flex-col gap-1 p-4 flex-1">
                    {navItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center px-4 py-2.5 rounded-lg text-sm font-semibold uppercase tracking-wider transition-colors ${
                          isActive(item.path)
                            ? 'text-[#38bdf8] bg-[#38bdf8]/10'
                            : 'text-white/70 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="p-4 border-t border-white/10">
                    <Link to="/contact" onClick={() => setIsOpen(false)}>
                      <span className="btn-pg w-full">Contact Us</span>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
