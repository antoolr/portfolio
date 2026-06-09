/**
 * Este archivo define la estructura de datos (interfaz) para un curso.
 * Especifica los campos que tiene cada curso: id, título, categoría, academia,
 * precio e imagen, con sus respectivos tipos de datos.
 */

export interface ICurso {
  id?: number;
  título: string;
  categoría: string;
  academia: string;
  precio: number;
  imagen?: string | null;
}