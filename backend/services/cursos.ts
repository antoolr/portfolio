/**
 * Este archivo gestiona todas las operaciones de base de datos para la tabla 'cursos'.
 * Incluye funciones para obtener todos los cursos, crear nuevos cursos, actualizar cursos existentes
 * y borrar cursos de la base de datos Supabase.
 */

// backend/services/cursos.ts
import { supabase } from "@/lib/supabase";
import type { ICurso } from "@/model/interfaces/ICurso";

export const fetchCursos = async (): Promise<ICurso[]> => {
  const { data, error } = await supabase.from('cursos').select('*').order('id', { ascending: true });
  if (error) {
    throw new Error(error.message || JSON.stringify(error));
  }
  return data ?? [];
};

export const createCurso = async (cursoData: Partial<ICurso>): Promise<ICurso[]> => {
  console.log('Intentando insertar curso:', cursoData);
  const { data, error } = await supabase.from('cursos').insert([cursoData]).select();
  console.log('Respuesta de inserción - data:', data, 'error:', error);
  if (error) {
    console.error('Error al insertar:', error);
    throw new Error(error.message || JSON.stringify(error));
  }
  return data ?? [];
};

export const updateCurso = async (id: number, cursoData: Partial<ICurso>): Promise<ICurso[]> => {
  console.log('Intentando actualizar curso id:', id, 'con datos:', cursoData);
  const { data, error } = await supabase.from('cursos').update(cursoData).eq('id', id).select();
  console.log('Respuesta de actualización - data:', data, 'error:', error);
  if (error) {
    console.error('Error al actualizar:', error);
    throw new Error(error.message || JSON.stringify(error));
  }
  return data ?? [];
};

export const updateCursoByTitle = async (
  originalTitle: string,
  cursoData: Partial<ICurso>
): Promise<ICurso[]> => {
  console.log('Intentando actualizar curso título:', originalTitle, 'con datos:', cursoData);
  const { data, error } = await supabase
    .from('cursos')
    .update(cursoData)
    .eq('título', originalTitle)
    .select();
  console.log('Respuesta de actualización por título - data:', data, 'error:', error);
  if (error) {
    console.error('Error al actualizar por título:', error);
    throw new Error(error.message || JSON.stringify(error));
  }
  return data ?? [];
};

export const deleteCurso = async (id: number): Promise<void> => {
  console.log('Intentando eliminar curso id:', id);
  const { error } = await supabase.from('cursos').delete().eq('id', id);
  console.log('Respuesta de eliminación - error:', error);
  if (error) {
    console.error('Error al eliminar:', error);
    throw new Error(error.message || JSON.stringify(error));
  }
};

export const deleteCursoByTitle = async (originalTitle: string): Promise<void> => {
  console.log('Intentando eliminar curso título:', originalTitle);
  const { error } = await supabase.from('cursos').delete().eq('título', originalTitle);
  console.log('Respuesta de eliminación por título - error:', error);
  if (error) {
    console.error('Error al eliminar por título:', error);
    throw new Error(error.message || JSON.stringify(error));
  }
};