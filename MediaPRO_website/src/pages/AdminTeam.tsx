import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  fetchTeamMembers,
  upsertTeamMember,
  deleteTeamMember,
  uploadImage,
  type TeamMember,
} from '@/lib/supabase';
import { Plus, Trash2, Edit3, Save, X, ArrowLeft, Upload, User, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const EMPTY: Partial<TeamMember> = {
  name: '',
  role: '',
  role_group: 'development',
  description: '',
  image_url: '',
  order_index: 0,
};

const AdminTeam = () => {
  const navigate = useNavigate();
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editing, setEditing] = useState<Partial<TeamMember> | null>(null);
  const [uploadingFor, setUploadingFor] = useState<string | null>(null);

  useEffect(() => {
    if (!sessionStorage.getItem('admin_auth')) { navigate('/admin/login'); return; }
    load();
  }, []);

  const load = async () => {
    setLoading(true);
    try {
      setMembers(await fetchTeamMembers());
    } catch {
      toast.error('Өгөгдөл татахад алдаа гарлаа');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!editing?.name || !editing?.role) { toast.error('Нэр болон албан тушаалыг оруулна уу'); return; }
    setSaving(true);
    try {
      await upsertTeamMember(editing);
      toast.success('Хадгалагдлаа');
      setEditing(null);
      load();
    } catch {
      toast.error('Хадгалахад алдаа гарлаа');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Устгах уу?')) return;
    try {
      await deleteTeamMember(id);
      toast.success('Устгагдлаа');
      load();
    } catch {
      toast.error('Устгахад алдаа гарлаа');
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !editing) return;
    setUploadingFor('img');
    try {
      const path = `team/${Date.now()}_${file.name}`;
      const url = await uploadImage('team-photos', file, path);
      setEditing({ ...editing, image_url: url });
      toast.success('Зураг байршуулагдлаа');
    } catch {
      toast.error('Зураг байршуулахад алдаа');
    } finally {
      setUploadingFor(null);
    }
  };

  const groups = [
    { key: 'leadership', label: 'Удирдлага' },
    { key: 'development', label: 'Хөгжүүлэлтийн баг' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/admin" className="text-slate-400 hover:text-white transition-colors">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-lg font-bold">Багийн менежмент</h1>
          </div>
          <Button
            size="sm"
            className="bg-blue-600 hover:bg-blue-500 gap-2"
            onClick={() => setEditing({ ...EMPTY, order_index: members.length })}
          >
            <Plus className="h-4 w-4" />
            Гишүүн нэмэх
          </Button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-blue-400" />
          </div>
        ) : (
          <div className="space-y-10">
            {groups.map((g) => {
              const groupMembers = members.filter((m) => m.role_group === g.key);
              return (
                <div key={g.key}>
                  <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">{g.label}</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {groupMembers.map((m) => (
                      <div key={m.id} className="bg-slate-900 rounded-xl border border-slate-800 p-4 group">
                        <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-700 mx-auto mb-3">
                          {m.image_url ? (
                            <img src={m.image_url} alt={m.name} className="w-full h-full object-cover object-top" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <User className="h-6 w-6 text-slate-500" />
                            </div>
                          )}
                        </div>
                        <div className="text-center mb-3">
                          <div className="font-semibold text-sm">{m.name}</div>
                          <div className="text-blue-400 text-xs mt-0.5">{m.role}</div>
                        </div>
                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            onClick={() => setEditing(m)}
                            className="flex-1 flex items-center justify-center gap-1 text-xs bg-slate-800 hover:bg-slate-700 px-2 py-1.5 rounded-lg transition-colors"
                          >
                            <Edit3 className="h-3 w-3" /> Засах
                          </button>
                          <button
                            onClick={() => handleDelete(m.id)}
                            className="flex items-center justify-center text-xs bg-red-500/10 hover:bg-red-500/20 text-red-400 px-2 py-1.5 rounded-lg transition-colors"
                          >
                            <Trash2 className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    ))}
                    {groupMembers.length === 0 && (
                      <div className="col-span-full text-slate-500 text-sm py-6 text-center border border-dashed border-slate-700 rounded-xl">
                        Энэ бүлэгт гишүүн алга
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Edit modal */}
      {editing && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-slate-900 rounded-2xl border border-slate-700 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-5 border-b border-slate-800">
              <h3 className="font-bold">{editing.id ? 'Засах' : 'Шинэ гишүүн нэмэх'}</h3>
              <button onClick={() => setEditing(null)} className="text-slate-400 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-5 space-y-4">
              {/* Avatar preview + upload */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-700 shrink-0">
                  {editing.image_url ? (
                    <img src={editing.image_url} alt="" className="w-full h-full object-cover object-top" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <User className="h-6 w-6 text-slate-500" />
                    </div>
                  )}
                </div>
                <label className="cursor-pointer">
                  <div className="flex items-center gap-2 text-sm bg-slate-800 hover:bg-slate-700 px-3 py-2 rounded-lg border border-slate-700 transition-colors">
                    {uploadingFor === 'img' ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Upload className="h-4 w-4" />
                    )}
                    Зураг оруулах
                  </div>
                  <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                </label>
              </div>

              <div>
                <label className="text-xs font-medium text-slate-400 block mb-1">Нэр *</label>
                <Input
                  value={editing.name || ''}
                  onChange={(e) => setEditing({ ...editing, name: e.target.value })}
                  className="bg-slate-800 border-slate-700 text-white"
                  placeholder="Нэр"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-400 block mb-1">Албан тушаал *</label>
                <Input
                  value={editing.role || ''}
                  onChange={(e) => setEditing({ ...editing, role: e.target.value })}
                  className="bg-slate-800 border-slate-700 text-white"
                  placeholder="Жишээ: Backend Developer"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-400 block mb-1">Бүлэг</label>
                <select
                  value={editing.role_group || 'development'}
                  onChange={(e) => setEditing({ ...editing, role_group: e.target.value as any })}
                  className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg px-3 py-2 text-sm"
                >
                  <option value="leadership">Удирдлага</option>
                  <option value="development">Хөгжүүлэлтийн баг</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-medium text-slate-400 block mb-1">Товч танилцуулга</label>
                <Textarea
                  value={editing.description || ''}
                  onChange={(e) => setEditing({ ...editing, description: e.target.value })}
                  className="bg-slate-800 border-slate-700 text-white resize-none"
                  rows={3}
                  placeholder="Үүрэг хариуцлага, чиглэл..."
                />
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

              <div className="flex gap-3 pt-2">
                <Button
                  onClick={handleSave}
                  disabled={saving}
                  className="flex-1 bg-blue-600 hover:bg-blue-500 gap-2"
                >
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

export default AdminTeam;
