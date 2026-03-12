import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const navItems = [
  { name: 'Нүүр', path: '/' },
  { name: 'Портфолио', path: '/portfolio' },
  { name: 'Шийдлүүд', path: '/solutions' },
  { name: 'Бидний тухай', path: '/about' },
  { name: 'Ажлын байр', path: '/careers' },
  { name: 'Холбоо барих', path: '/contact' },
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
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-white border-b border-gray-100'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <img
              src="./images/media PRO logo NOTEXT.png"
              alt="Mediapro"
              className="h-9 w-auto"
            />
            <span className="text-lg font-bold text-gray-900 tracking-tight">
              Media<span className="text-blue-600">PRO</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                  isActive(item.path)
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile trigger */}
          <div className="flex items-center gap-3">
            <Link to="/contact" className="hidden md:inline-flex">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-5">
                Холбоо барих
              </Button>
            </Link>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="text-gray-600">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] p-0">
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-2.5 px-5 py-4 border-b">
                    <img src="./images/media PRO logo NOTEXT.png" alt="Mediapro" className="h-8 w-auto" />
                    <span className="font-bold text-gray-900">Media<span className="text-blue-600">PRO</span></span>
                  </div>
                  <div className="flex flex-col gap-1 p-4 flex-1">
                    {navItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                          isActive(item.path)
                            ? 'text-blue-600 bg-blue-50'
                            : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="p-4 border-t">
                    <Link to="/contact" onClick={() => setIsOpen(false)}>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">Холбоо барих</Button>
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
