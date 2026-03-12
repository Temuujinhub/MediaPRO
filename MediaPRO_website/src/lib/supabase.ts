import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/* ── Types ── */
export type PortfolioItem = {
  id: string;
  title: string;
  client: string;
  domain: string;
  description: string;
  key_impacts: string[];
  tags: string[];
  category: string;
  accent_color: string;
  screenshot_url: string | null;
  url: string | null;
  order_index: number;
  created_at: string;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  role_group: 'leadership' | 'development';
  description: string | null;
  image_url: string | null;
  order_index: number;
  created_at: string;
};

/* ── Portfolio helpers ── */
export const fetchPortfolioItems = async (): Promise<PortfolioItem[]> => {
  const { data, error } = await supabase
    .from('portfolio_items')
    .select('*')
    .order('order_index', { ascending: true });
  if (error) throw error;
  return data ?? [];
};

export const upsertPortfolioItem = async (item: Partial<PortfolioItem>) => {
  const { data, error } = await supabase
    .from('portfolio_items')
    .upsert(item)
    .select()
    .single();
  if (error) throw error;
  return data;
};

export const deletePortfolioItem = async (id: string) => {
  const { error } = await supabase.from('portfolio_items').delete().eq('id', id);
  if (error) throw error;
};

/* ── Team helpers ── */
export const fetchTeamMembers = async (): Promise<TeamMember[]> => {
  const { data, error } = await supabase
    .from('team_members')
    .select('*')
    .order('order_index', { ascending: true });
  if (error) throw error;
  return data ?? [];
};

export const upsertTeamMember = async (member: Partial<TeamMember>) => {
  const { data, error } = await supabase
    .from('team_members')
    .upsert(member)
    .select()
    .single();
  if (error) throw error;
  return data;
};

export const deleteTeamMember = async (id: string) => {
  const { error } = await supabase.from('team_members').delete().eq('id', id);
  if (error) throw error;
};

/* ── Storage upload ── */
export const uploadImage = async (
  bucket: 'portfolio-screenshots' | 'team-photos',
  file: File,
  path: string,
): Promise<string> => {
  const { error } = await supabase.storage.from(bucket).upload(path, file, { upsert: true });
  if (error) throw error;
  const { data } = supabase.storage.from(bucket).getPublicUrl(path);
  return data.publicUrl;
};
