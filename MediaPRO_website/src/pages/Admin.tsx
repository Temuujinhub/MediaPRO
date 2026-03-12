import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Users, Briefcase, LogOut, ArrowRight, Settings } from 'lucide-react';

const Admin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem('admin_auth')) {
      navigate('/admin/login');
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('admin_auth');
    navigate('/admin/login');
  };

  const cards = [
    {
      title: 'Портфолио',
      description: 'Төсөл нэмэх, засах, устгах. Скриншот байршуулах боломжтой.',
      icon: <Briefcase className="h-6 w-6" />,
      href: '/admin/portfolio',
      color: 'from-blue-500 to-blue-700',
    },
    {
      title: 'Баг',
      description: 'Багийн гишүүдийн мэдээлэл, зураг, роль удирдах.',
      icon: <Users className="h-6 w-6" />,
      href: '/admin/team',
      color: 'from-purple-500 to-purple-700',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Top bar */}
      <div className="border-b border-slate-800 bg-slate-900">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Settings className="h-4 w-4" />
            </div>
            <div>
              <div className="font-bold text-sm">MediaPRO Admin</div>
              <div className="text-slate-400 text-xs">Удирдлагын самбар</div>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors"
          >
            <LogOut className="h-4 w-4" />
            Гарах
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-2">Сайн байна уу 👋</h1>
          <p className="text-slate-400">Вэбсайтын агуулгыг энд удирдаарай.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {cards.map((card) => (
            <Link
              key={card.href}
              to={card.href}
              className="group bg-slate-900 rounded-2xl border border-slate-800 p-6 hover:border-slate-600 transition-all hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-5`}>
                {card.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{card.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{card.description}</p>
              <div className="flex items-center gap-1 text-blue-400 text-sm font-medium group-hover:gap-2 transition-all">
                Нээх <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>

        {/* Info box */}
        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6">
          <h3 className="font-semibold mb-3 text-sm text-slate-300">Supabase тохиргоо</h3>
          <div className="space-y-2 text-xs text-slate-500">
            <p>Backend ажиллахын тулд дараах .env хувьсагчдыг тохируулна уу:</p>
            <div className="bg-slate-800 rounded-lg p-3 font-mono space-y-1 text-slate-300">
              <div>VITE_SUPABASE_URL=https://xxx.supabase.co</div>
              <div>VITE_SUPABASE_ANON_KEY=eyJ...</div>
              <div>VITE_ADMIN_PASSWORD=таны_нууц_үг</div>
            </div>
            <p className="pt-1">
              Supabase дотор <code className="text-blue-400">portfolio_items</code> болон{' '}
              <code className="text-blue-400">team_members</code> хүснэгтүүдийг migration.sql-аар үүсгэнэ.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
