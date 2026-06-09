/**
 * Este archivo crea una instancia alternativa del cliente de Supabase.
 * Se utiliza como utilidad para conectarse a la base de datos en diferentes contextos
 * del modelo de datos de la aplicación.
 */

import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL;
const apikey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// realizar la conexion a supabase (con la url y la apikey) y exportar el cliente
export const supabase = createClient(url, apikey);