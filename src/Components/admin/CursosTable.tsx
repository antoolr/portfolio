/**
 * Este archivo es el componente de tabla que muestra todos los cursos registrados.
 * Renderiza una tabla con columnas para título, categoría, academia, precio, imagen
 * y acciones (editar y borrar) si se proporcionan los callbacks.
 */

// src/components/admin/CursosTable.tsx
import type { ICurso } from "@/model/interfaces/ICurso";

interface CursosTableProps {
  data: ICurso[];
  onDelete?: (curso: ICurso) => void;
  onEdit?: (curso: ICurso) => void;
}

export default function CursosTable({ data, onDelete, onEdit }: CursosTableProps) {
  return (
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="border-b">
          <th className="p-2">Título</th>
          <th className="p-2">Categoría</th>
          <th className="p-2">Academia</th>
          <th className="p-2">Precio</th>
          <th className="p-2">Imagen</th>
          <th className="p-2">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.map((c, index) => (
          <tr key={c.id ?? index} className="border-b hover:bg-white/5">
            <td className="p-2">{c.título}</td>
            <td className="p-2">{c.categoría}</td>
            <td className="p-2">{c.academia}</td>
            <td className="p-2">{c.precio}€</td>
            <td className="p-2">
              {c.imagen ? (
                <a href={c.imagen} target="_blank" rel="noreferrer" className="text-primary underline">
                  Ver imagen
                </a>
              ) : (
                <span className="text-gray-400">Sin imagen</span>
              )}
            </td>
            <td className="p-2 flex gap-2">
              {onEdit ? (
                <button
                  type="button"
                  onClick={() => onEdit(c)}
                  className="rounded bg-blue-600 px-3 py-1 text-sm text-white hover:bg-blue-700"
                >
                  Editar
                </button>
              ) : null}
              {onDelete ? (
                <button
                  type="button"
                  onClick={() => onDelete(c)}
                  className="rounded bg-red-600 px-3 py-1 text-sm text-white hover:bg-red-700"
                >
                  Borrar
                </button>
              ) : null}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}