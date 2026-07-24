import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';


const Footer = () => (
  <footer className="bg-[#030610] text-white border-t border-white/5 relative overflow-hidden">
    <div className="pg-orb pg-orb-indigo orb-drift-2 w-[400px] h-[400px] -bottom-48 -right-24" aria-hidden="true"></div>
    <div className="container-custom px-4 sm:px-6 lg:px-8 py-14 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2.5 mb-5">
            <img src="./images/media PRO logo NOTEXT.png" alt="MediaPRO" className="h-8 w-auto brightness-0 invert" />
            <span className="text-xl font-bold uppercase">Media<span className="gradient-text">PRO</span></span>
          </div>
          <p className="text-white/50 text-sm leading-relaxed mb-2 max-w-sm">
            Mongolia's Premier Tech Partner — powering mission-critical digital infrastructure
            for the country's leading enterprises and global partners since 2013.
          </p>
          <p className="text-[#7dd3fc] text-xs font-medium uppercase tracking-wider mb-6">
            Reliable · Innovative · Local Experts
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-2.5 text-sm text-white/50">
              <MapPin className="h-4 w-4 text-[#38bdf8] mt-0.5 shrink-0" />
              <span>#204, Arig Center, Building 10, Jamyan Gun Street 5/2, Ulaanbaatar</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-white/50">
              <Phone className="h-4 w-4 text-[#38bdf8] shrink-0" />
              <span>+976 99091911</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-white/50">
              <Mail className="h-4 w-4 text-[#38bdf8] shrink-0" />
              <span>info@mediapro.mn</span>
            </div>
          </div>
        </div>

        {/* Nav */}
        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h3>
          <ul className="space-y-3">
            {[
              { label: 'Home', to: '/' },
              { label: 'Portfolio', to: '/portfolio' },
              { label: 'Solutions', to: '/solutions' },
              { label: 'About Us', to: '/about' },
              { label: 'Careers', to: '/careers' },
            ].map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-white/50 hover:text-[#38bdf8] text-sm transition-colors">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Companies */}
        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Our Platforms</h3>
          <ul className="space-y-3 text-white/50 text-sm">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#38bdf8] rounded-full"></span>Megun Media</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>Chatbot.mn</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>OnlineHR.mn</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-sky-400 rounded-full"></span>Fleex.mn</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>Flux.mn</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 mt-12 pt-6 text-center text-xs text-white/40">
        <span>© 2024 Mediapro LLC. All rights reserved.</span>
      </div>
    </div>
  </footer>
);

export default Footer;
