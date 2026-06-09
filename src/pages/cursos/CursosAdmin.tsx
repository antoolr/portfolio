/**
 * Este archivo es la página pública de cursos (no admin).
 * Solo carga y muestra el listado de todos los cursos disponibles de forma de solo lectura,
 * sin permitir ediciones o eliminaciones.
 */

import Header from "@/Components/main/Header"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import type { ICurso } from "@/model/interfaces/ICurso"

export default function CursosAdmin() {
  const [cursos, setCursos] = useState<ICurso[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  async function loadCursos() {
    const { data, error } = await supabase
      .from("cursos")
      .select("*")
      .order("id", { ascending: true })

    if (error) {
      console.error("Error cargando cursos:", error)
      setError("No se pudieron cargar los cursos")
      setLoading(false)
      return
    }

    setCursos(data || [])
    setLoading(false)
  }

  useEffect(() => {
    loadCursos()
  }, [])

  if (loading) {
    return <div className="p-6 pt-24">Cargando cursos...</div>
  }

  if (error) {
    return <div className="p-6 pt-24 text-red-400">{error}</div>
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-950 px-4 py-24 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/20">
            <h1 className="text-4xl font-bold tracking-tight text-white text-center">Cursos disponibles</h1>
          </div>

          {cursos.length === 0 ? (
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-gray-300">
              No hay cursos registrados.
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {cursos.map((curso, index) => (
                <article
                  key={curso.id ?? `${curso.título}-${index}`}
                  className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:bg-white/10"
                >
                  {curso.imagen ? (
                    <div className="overflow-hidden rounded-3xl bg-slate-950">
                      <img
                        src={curso.imagen}
                        alt={`Imagen del curso ${curso.título}`}
                        className="h-48 w-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex h-48 items-center justify-center rounded-3xl bg-slate-950 text-sm text-gray-500">
                      Sin imagen disponible
                    </div>
                  )}
                  <div className="mt-5 flex items-center justify-between gap-3">
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                      {curso.categoría}
                    </span>
                    <span className="text-sm text-gray-400">€{curso.precio}</span>
                  </div>
                  <h2 className="mt-5 text-2xl font-semibold text-white">{curso.título}</h2>
                  <p className="mt-3 text-sm leading-6 text-gray-300">Academia: {curso.academia}</p>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  )
}
