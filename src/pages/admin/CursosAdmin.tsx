/**
 * Este archivo es el panel de administración principal para gestionar cursos.
 * Permite crear, actualizar, listar y borrar cursos. Incluye el formulario de entrada
 * y la tabla de listado con todas las funcionalidades CRUD.
 */

// src/pages/admin/CursosAdmin.tsx
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import {
  fetchCursos,
  createCurso,
  updateCurso,
  updateCursoByTitle,
  deleteCurso,
  deleteCursoByTitle,
} from "../../../backend/services/cursos";
import CursosTable from "@/Components/admin/CursosTable";
import type { ICurso } from "@/model/interfaces/ICurso";

const initialFormState = {
  titulo: "",
  categoría: "",
  academia: "",
  precio: "",
  imagen: "",
};

export default function CursosAdmin() {
  const [cursos, setCursos] = useState<ICurso[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState(initialFormState);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editingTitle, setEditingTitle] = useState<string | null>(null);

  function getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message;
    if (typeof error === "string") return error;
    if (typeof error === "object" && error !== null) {
      if ("message" in error && typeof error.message === "string") {
        return error.message;
      }
      return JSON.stringify(error, Object.getOwnPropertyNames(error));
    }
    return String(error);
  }

  async function loadCursos() {
    try {
      const data = await fetchCursos();
      setCursos(data || []);
    } catch (err) {
      const message = getErrorMessage(err);
      console.error("Error cargando cursos:", err);
      setError(`No se pudieron cargar los cursos: ${message}`);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadCursos();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setError(null);

    if (!form.titulo || !form.categoría || !form.academia || !form.precio) {
      setError("Completa todos los campos obligatorios.");
      setSaving(false);
      return;
    }

    try {
      const cursoData = {
        título: form.titulo.trim(),
        categoría: form.categoría.trim(),
        academia: form.academia.trim(),
        precio: Number(form.precio),
        imagen: form.imagen.trim() || null,
      };

      const isEditing = editingId !== null || editingTitle !== null;
      if (isEditing) {
        const data = editingId !== null
          ? await updateCurso(editingId, cursoData)
          : await updateCursoByTitle(editingTitle!, cursoData);

        setCursos((prev) =>
          prev.map((c) => {
            if (editingId !== null && c.id === editingId) {
              return data[0] || c;
            }
            if (editingId === null && editingTitle !== null && c.título === editingTitle) {
              return data[0] || c;
            }
            return c;
          })
        );
        setEditingId(null);
        setEditingTitle(null);
      } else {
        const data = await createCurso(cursoData);
        setCursos((prev) => [...prev, ...(data || [])]);
      }
      setForm(initialFormState);
    } catch (err) {
      const message = getErrorMessage(err);
      console.error(editingId ? "Error actualizando curso:" : "Error creando curso:", err);
      setError(editingId ? `No se pudo actualizar el curso: ${message}` : `No se pudo guardar el curso: ${message}`);
    } finally {
      setSaving(false);
    }
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleDelete(curso: ICurso) {
    if (!window.confirm("¿Estás seguro de que quieres borrar este curso?")) return;
    try {
      if (curso.id != null) {
        await deleteCurso(curso.id);
      } else {
        await deleteCursoByTitle(curso.título);
      }
      setCursos((prev) => prev.filter((c) => c.título !== curso.título));
    } catch (err) {
      const message = getErrorMessage(err);
      console.error("Error borrando curso:", err);
      setError(`No se pudo borrar el curso: ${message}`);
    }
  }

  function handleEdit(curso: ICurso) {
    setForm({
      titulo: curso.título,
      categoría: curso.categoría,
      academia: curso.academia,
      precio: String(curso.precio),
      imagen: curso.imagen || "",
    });
    setEditingId(curso.id ?? null);
    setEditingTitle(curso.título ?? null);
  }

  if (loading) return <div className="p-8">Cargando panel...</div>;

  return (
    <div className="p-8 space-y-8">
      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm">
        <div className="mb-6 flex flex-col gap-2">
          <h1 className="text-3xl font-bold">Gestión de Cursos</h1>
          <p className="text-sm text-gray-400">
            Inserta un curso en la tabla de Supabase y revisa el listado de cursos registrados.
          </p>
        </div>

        {error ? (
          <div className="mb-4 rounded-md bg-red-500/10 px-4 py-3 text-sm text-red-200">
            {error}
          </div>
        ) : null}

        <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
          <label className="flex flex-col gap-2">
            <span>Título</span>
            <input
              name="titulo"
              value={form.titulo}
              onChange={handleChange}
              required
              className="rounded-md border border-white/10 bg-slate-950/70 px-3 py-2 text-white outline-none focus:border-primary"
              placeholder="Curso de Hacking ético"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span>Categoría</span>
            <input
              name="categoría"
              value={form.categoría}
              onChange={handleChange}
              required
              className="rounded-md border border-white/10 bg-slate-950/70 px-3 py-2 text-white outline-none focus:border-primary"
              placeholder="Ciberseguridad"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span>Academia</span>
            <input
              name="academia"
              value={form.academia}
              onChange={handleChange}
              required
              className="rounded-md border border-white/10 bg-slate-950/70 px-3 py-2 text-white outline-none focus:border-primary"
              placeholder="Udemy"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span>Precio</span>
            <input
              name="precio"
              type="number"
              inputMode="numeric"
              value={form.precio}
              onChange={handleChange}
              required
              min="0"
              className="rounded-md border border-white/10 bg-slate-950/70 px-3 py-2 text-white outline-none focus:border-primary"
              placeholder="20"
            />
          </label>

          <label className="flex flex-col gap-2 md:col-span-2">
            <span>Imagen (URL)</span>
            <input
              name="imagen"
              value={form.imagen}
              onChange={handleChange}
              className="rounded-md border border-white/10 bg-slate-950/70 px-3 py-2 text-white outline-none focus:border-primary"
              placeholder="https://..."
            />
          </label>

          <div className="md:col-span-2 flex gap-2">
            <button
              type="submit"
              disabled={saving}
              className="rounded-md bg-primary px-4 py-2 text-white transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {saving ? "Guardando..." : editingId !== null || editingTitle !== null ? "Actualizar curso" : "Guardar curso"}
            </button>
            {(editingId !== null || editingTitle !== null) && (
              <button
                type="button"
                onClick={() => {
                  setEditingId(null);
                  setEditingTitle(null);
                  setForm(initialFormState);
                }}
                className="rounded-md bg-gray-600 px-4 py-2 text-white transition hover:bg-gray-700"
              >
                Cancelar
              </button>
            )}
          </div>
        </form>
      </section>

      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold">Listado de cursos</h2>
          <span className="text-sm text-gray-400">{cursos.length} curso(s) registrados</span>
        </div>

        {cursos.length === 0 ? (
          <div className="rounded-md border border-dashed border-white/10 p-6 text-gray-400">
            No hay cursos registrados.
          </div>
        ) : (
          <CursosTable data={cursos} onDelete={handleDelete} onEdit={handleEdit} />
        )}
      </section>
    </div>
  );
}