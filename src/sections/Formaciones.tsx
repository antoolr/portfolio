import fotoESO from '../fotos/antonio.jpeg';


const titulos = [
  {
    id: 1,
    title: 'ESO',
    href: '#',
    description:
      'Enseñanza Secundaria Obligatoria',
    datetime: '2019-2023',
    category: { title: 'IES Martín García Ramos (Albox)', href: '#' },
    author: {
      name: 'Antonio Lozano Rodríguez',
      role: 'Co-Founder / CTO',
      href: '#tituloESO',
      imageUrl:
        fotoESO,
    },
  },
  {
    id: 2,
    title: 'SMR',
    href: '#',
    description: 'Sistemas Microinformáticos y Redes',
    datetime: '2023-2025',
    category: { title: 'IES Cardenal Cisneros (Albox)', href: '#' },
    author: {
      name: 'Antonio Lozano Rodríguez',
      role: 'Front-end Developer',
      href: '#',
      imageUrl:
        fotoESO,
    },
  },
  {
    id: 3,
    title: 'Prácticas en un país de la Unión Europea',
    href: '#',
    description:
      'Prácticas de SMR realizadas en Irlanda dentro del programa de movilidad europea',
    datetime: '2025',
    category: { title: 'Cork, Irlanda', href: '#' },
    author: {
      name: 'Antonio Lozano Rodríguez',
      role: 'Director of Product',
      href: '#',
      imageUrl:
        fotoESO,
    },
  },
  {
    id: 4,
    title: 'Curso completo de Hacking Ético y Ciberseguridad',
    href: '#',
    description: 'Curso práctico de introducción al hacking ético: reconocimiento, escaneo, análisis de vulnerabilidades y uso de Kali Linux.',
    datetime: '2026',
    category: { title: 'Udemy', href: '#' },
    author: {
      name: 'Antonio Lozano Rodríguez',
      role: 'Front-end Developer',
      href: '#',
      imageUrl:
        fotoESO,
    },
  },
  {
    id: 5,
    title: 'Curso avanzado de Hacking Ético y Ciberseguridad',
    href: '#',
    description: 'Formación avanzada en técnicas de intrusión, explotación, post‑explotación y análisis profundo de vulnerabilidades.',
    datetime: '2026',
    category: { title: 'Udemy', href: '#' },
    author: {
      name: 'Antonio Lozano Rodríguez',
      role: 'Front-end Developer',
      href: '#',
      imageUrl:
        fotoESO,
    },
  }
]

const Formaciones = () => {
  return (
    <section id="formaciones" className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="py-24 sm:py-32 w-full">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          {/* ENCABEZADO CENTRADO CON EFECTO GLOW */}
          <div className="mx-auto max-w-2xl border-4 border-purple-600/50 rounded-2xl p-8 text-center bg-gray-800/20 backdrop-blur-sm shadow-[0_0_20px_rgba(147,51,234,0.2)]">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Trayectoria y Certificaciones
            </h2>
            <p className="mt-4 text-lg leading-8 text-purple-300 font-medium">
              Especialización en Desarrollo Web y Ciberseguridad
            </p>
          </div>

          {/* GRID DE TARJETAS PROFESIONALES */}
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 border-t border-gray-800 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {titulos.map((titulo) => (
              <article 
                key={titulo.id} 
                className="group relative flex max-w-xl flex-col items-start justify-between rounded-2xl border border-gray-700 bg-gray-800/40 p-6 transition-all duration-300 hover:border-purple-500 hover:bg-gray-800/80 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={titulo.datetime} className="text-gray-500">
                    {titulo.datetime}
                  </time>
                  <span className="relative z-10 rounded-full bg-purple-500/10 px-3 py-1.5 font-medium text-purple-400 border border-purple-500/20">
                    {titulo.category.title}
                  </span>
                </div>

                <div className="relative grow">
                  <h3 className="mt-4 text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    <a href={titulo.href} target="_blank" rel="noopener noreferrer">
                      <span className="absolute inset-0" />
                      {titulo.title}
                    </a>
                  </h3>
                  <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-400">
                    {titulo.description}
                  </p>
                </div>

                {/* BOTÓN "VER CREDENCIAL" (Sustituyendo el pie de autor si prefieres algo más formal) */}
                <div className="mt-6 flex items-center gap-x-3 text-sm font-semibold text-purple-400">
                  <span>Ver certificado</span>
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Formaciones;