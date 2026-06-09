/**
 * Este archivo configura e inicializa el cliente de Supabase.
 * Carga las variables de entorno necesarias (URL y clave anónima) y establece
 * la conexión con la base de datos para toda la aplicación.
 */

import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL ?? '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY ?? '';

export const supabase: SupabaseClient | null =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

export function getSupabase(): SupabaseClient {
  if (!supabase) {
    throw new Error('Faltan las variables de entorno de Supabase');
  }
  return supabase;
}
