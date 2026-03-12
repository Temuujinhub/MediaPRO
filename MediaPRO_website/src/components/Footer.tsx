import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => (
  <footer className="bg-slate-900 text-white">
    <div className="container-custom px-4 sm:px-6 lg:px-8 py-14">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2.5 mb-5">
            <img src="./images/media PRO logo NOTEXT.png" alt="MediaPRO" className="h-8 w-auto brightness-0 invert" />
            <span className="text-xl font-bold">Media<span className="text-blue-400">PRO</span></span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
            Since 2013, delivering high-availability software systems, strategic marketing,
            and workforce automation for enterprise clients.
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-2.5 text-sm text-slate-400">
              <MapPin className="h-4 w-4 text-blue-400 mt-0.5 shrink-0" />
              <span>#204, Arig Center, Building 10, Jamyan Gun Street 5/2, Ulaanbaatar</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-slate-400">
              <Phone className="h-4 w-4 text-blue-400 shrink-0" />
              <span>+976 99091911</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-slate-400">
              <Mail className="h-4 w-4 text-blue-400 shrink-0" />
              <span>info@mediapro.mn</span>
            </div>
          </div>
        </div>

        {/* Nav */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3">
            {[
              { label: 'Home', to: '/' },
              { label: 'Portfolio', to: '/portfolio' },
              { label: 'Solutions', to: '/solutions' },
              { label: 'About Us', to: '/about' },
              { label: 'Careers', to: '/careers' },
            ].map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-slate-400 hover:text-white text-sm transition-colors">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Companies */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-4">Our Companies</h3>
          <ul className="space-y-3 text-slate-400 text-sm">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>Megun Media</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>Chatbot.mn</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>OnlineHR.mn</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
        <span>© 2024 Mediapro LLC. All rights reserved.</span>
        <Link to="/admin" className="hover:text-slate-400 transition-colors">Admin</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
