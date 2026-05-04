// lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseKey);

export async function saveLead(data: {
  email: string;
  nombre: string;
  modo: 'A' | 'B';
  valor_ingresado: number;
  resultado: Record<string, number>;
}) {
  const { error } = await supabase.from('leads').insert([data]);

  if (error) {
    console.error('Error saving lead:', error);
    throw error;
  }
}

export async function markWhatsAppClick(email: string) {
  const { error } = await supabase
    .from('leads')
    .update({ clickeado_whatsapp: true })
    .eq('email', email)
    .order('fecha_creacion', { ascending: false })
    .limit(1);

  if (error) {
    console.error('Error updating lead:', error);
    throw error;
  }
}
