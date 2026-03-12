import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  fetchPortfolioItems,
  upsertPortfolioItem,
  deletePortfolioItem,
  uploadImage,
  type PortfolioItem,
} from '@/lib/supabase';
import { Plus, Trash2, Edit3, Save, X, ArrowLeft, Upload, Loader2, Image } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const ACCENT_OPTIONS = ['blue', 'green', 'purple', 'orange'];
const CATEGORY_OPTIONS = ['Enterprise', 'SaaS', 'AI', 'IoT'];

const EMPTY: Partial<PortfolioItem> = {
  title: '',
  client: '',
  domain: '',
  description: '',
  key_impacts: [],
  tags: [],
  category: 'Enterprise',
  accent_color: 'blue',
  screenshot_url: null,
  url: null,
  order_index: 0,
};

const accentColors: Record<string, string> = {
  blue: 'bg-blue-500',
  green: 'bg-emerald-500',
  purple: 'bg-purple-500',
  orange: 'bg-orange-500',
};

const AdminPortfolio = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editing, setEditing] = useState<Partial<PortfolioItem> | null>(null);
  const [uploading, setUploading] = useState(false);
  const [impactsText, setImpactsText] = useState('');
  const [tagsText, setTagsText] = useState('');

  useEffect(() => {
    if (!sessionStorage.getItem('admin_auth')) { navigate('/admin/login'); return; }
    load();
  }, []);

  const load = async () => {
    setLoading(true);
    try {
      setItems(await fetchPortfolioItems());
    } catch {
      toast.error('Өгөгдөл татахад алдаа');
    } finally {
      setLoading(false);
    }
  };

  const openEdit = (item: Partial<PortfolioItem>) => {
    setEditing(item);
    setImpactsText((item.key_impacts || []).join('\n'));
    setTagsText((item.tags || []).join(', '));
  };

  const handleSave = async () => {
    if (!editing?.title || !editing?.client) { toast.error('Гарчиг болон харилцагчийг оруулна уу'); return; }
    setSaving(true);
    try {
      const payload = {
        ...editing,
        key_impacts: impactsText.split('\n').filter(Boolean),
        tags: tagsText.split(',').map((t) => t.trim()).filter(Boolean),
      };
      await upsertPortfolioItem(payload);
      toast.success('Хадгалагдлаа');
      setEditing(null);
      load();
    } catch {
      toast.error('Хадгалахад алдаа');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Устгах уу?')) return;
    try {
      await deletePortfolioItem(id);
      toast.success('Устгагдлаа');
      load();
    } catch {
      toast.error('Устгахад алдаа');
    }
  };

  const handleScreenshotUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !editing) return;
    setUploading(true);
    try {
      const path = `portfolio/${Date.now()}_${file.name}`;
      const url = await uploadImage('portfolio-screenshots', file, path);
      setEditing({ ...editing, screenshot_url: url });
      toast.success('Скриншот байршуулагдлаа');
    } catch {
      toast.error('Зураг байршуулахад алдаа');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/admin" className="text-slate-400 hover:text-white transition-colors">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-lg font-bold">Портфолио менежмент</h1>
          </div>
          <Button
            size="sm"
            className="bg-blue-600 hover:bg-blue-500 gap-2"
            onClick={() => openEdit({ ...EMPTY, order_index: items.length })}
          >
            <Plus className="h-4 w-4" />
            Төсөл нэмэх
          </Button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-blue-400" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item) => (
              <div key={item.id} className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden group">
                {/* Screenshot preview */}
                <div className="aspect-video bg-slate-800 flex items-center justify-center overflow-hidden">
                  {item.screenshot_url ? (
                    <img src={item.screenshot_url} alt={item.title} className="w-full h-full object-cover object-top" />
                  ) : (
                    <div className="flex flex-col items-center gap-2 text-slate-600">
                      <Image className="h-8 w-8" />
                      <span className="text-xs">Скриншот алга</span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-2 h-2 rounded-full ${accentColors[item.accent_color] || 'bg-blue-500'}`}></div>
                    <span className="text-xs text-slate-400 font-medium">{item.category}</span>
                  </div>
                  <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                  <p className="text-slate-400 text-xs mb-3 line-clamp-2">{item.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {(item.tags || []).slice(0, 3).map((t) => (
                      <span key={t} className="text-xs bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full border border-slate-700">{t}</span>
                    ))}
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => openEdit(item)}
                      className="flex-1 flex items-center justify-center gap-1 text-xs bg-slate-800 hover:bg-slate-700 px-2 py-1.5 rounded-lg"
                    >
                      <Edit3 className="h-3 w-3" /> Засах
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="flex items-center justify-center text-xs bg-red-500/10 hover:bg-red-500/20 text-red-400 px-2 py-1.5 rounded-lg"
                    >
                      <Trash2 className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {items.length === 0 && (
              <div className="col-span-full text-slate-500 text-sm py-12 text-center border border-dashed border-slate-700 rounded-xl">
                Төсөл байхгүй байна. Шинэ төсөл нэмнэ үү.
              </div>
            )}
          </div>
        )}
      </div>

      {/* Edit modal */}
      {editing && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-slate-900 rounded-2xl border border-slate-700 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-5 border-b border-slate-800">
              <h3 className="font-bold">{editing.id ? 'Засах' : 'Шинэ төсөл нэмэх'}</h3>
              <button onClick={() => setEditing(null)} className="text-slate-400 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-5 space-y-4">
              {/* Screenshot upload */}
              <div>
                <label className="text-xs font-medium text-slate-400 block mb-2">Скриншот / Зураг</label>
                <div className="aspect-video bg-slate-800 rounded-xl overflow-hidden flex items-center justify-center mb-2 border border-slate-700">
                  {editing.screenshot_url ? (
                    <img src={editing.screenshot_url} alt="" className="w-full h-full object-cover object-top" />
                  ) : (
                    <div className="text-slate-600 flex flex-col items-center gap-2">
                      <Image className="h-8 w-8" />
                      <span className="text-xs">Скриншот алга</span>
                    </div>
                  )}
                </div>
                <label className="cursor-pointer">
                  <div className="flex items-center justify-center gap-2 text-sm bg-slate-800 hover:bg-slate-700 px-3 py-2 rounded-lg border border-slate-700 transition-colors">
                    {uploading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Upload className="h-4 w-4" />}
                    Скриншот оруулах
                  </div>
                  <input type="file" accept="image/*" className="hidden" onChange={handleScreenshotUpload} />
                </label>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-slate-400 block mb-1">Гарчиг *</label>
                  <Input
                    value={editing.title || ''}
                    onChange={(e) => setEditing({ ...editing, title: e.target.value })}
                    className="bg-slate-800 border-slate-700 text-white"
                    placeholder="MACTR, OnlineHR..."
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-400 block mb-1">Харилцагч *</label>
                  <Input
                    value={editing.client || ''}
                    onChange={(e) => setEditing({ ...editing, client: e.target.value })}
                    className="bg-slate-800 border-slate-700 text-white"
                    placeholder="Компанийн нэр"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-slate-400 block mb-1">Домэйн / Салбар</label>
                  <Input
                    value={editing.domain || ''}
                    onChange={(e) => setEditing({ ...editing, domain: e.target.value })}
                    className="bg-slate-800 border-slate-700 text-white"
                    placeholder="Enterprise, SaaS..."
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-400 block mb-1">Вебсайт URL</label>
                  <Input
                    value={editing.url || ''}
                    onChange={(e) => setEditing({ ...editing, url: e.target.value })}
                    className="bg-slate-800 border-slate-700 text-white"
                    placeholder="https://..."
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-slate-400 block mb-1">Тайлбар</label>
                <Textarea
                  value={editing.description || ''}
                  onChange={(e) => setEditing({ ...editing, description: e.target.value })}
                  className="bg-slate-800 border-slate-700 text-white resize-none"
                  rows={3}
                  placeholder="Төслийн тайлбар..."
                />
              </div>

              <div>
                <label className="text-xs font-medium text-slate-400 block mb-1">Гол үр дүн (мөр бүр = нэг зүйл)</label>
                <Textarea
                  value={impactsText}
                  onChange={(e) => setImpactsText(e.target.value)}
                  className="bg-slate-800 border-slate-700 text-white resize-none font-mono text-xs"
                  rows={5}
                  placeholder="Мөр бүр нэг үр дүн болно..."
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-slate-400 block mb-1">Тагууд (таслалаар тусгаарлах)</label>
                  <Input
                    value={tagsText}
                    onChange={(e) => setTagsText(e.target.value)}
                    className="bg-slate-800 border-slate-700 text-white"
                    placeholder="Enterprise, AI, SaaS"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-400 block mb-1">Ангилал</label>
                  <select
                    value={editing.category || 'Enterprise'}
                    onChange={(e) => setEditing({ ...editing, category: e.target.value })}
                    className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg px-3 py-2 text-sm"
                  >
                    {CATEGORY_OPTIONS.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-slate-400 block mb-2">Өнгийн акцент</label>
                  <div className="flex gap-2">
                    {ACCENT_OPTIONS.map((color) => (
                      <button
                        key={color}
                        onClick={() => setEditing({ ...editing, accent_color: color })}
                        className={`w-8 h-8 rounded-full ${accentColors[color]} transition-all ${
                          editing.accent_color === color ? 'ring-2 ring-white ring-offset-2 ring-offset-slate-900' : ''
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-400 block mb-1">Эрэмбэ</label>
                  <Input
                    type="number"
                    value={editing.order_index ?? 0}
                    onChange={(e) => setEditing({ ...editing, order_index: Number(e.target.value) })}
                    className="bg-slate-800 border-slate-700 text-white"
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <Button onClick={handleSave} disabled={saving} className="flex-1 bg-blue-600 hover:bg-blue-500 gap-2">
                  {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                  Хадгалах
                </Button>
                <Button variant="outline" onClick={() => setEditing(null)} className="border-slate-700 text-slate-300 hover:bg-slate-800">
                  Болих
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPortfolio;
