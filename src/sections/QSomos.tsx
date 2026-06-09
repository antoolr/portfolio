const links = [
  { name: 'Servicios que ofrezco', href: 'https://www.linkedin.com/in/tu-perfil' }, // Cambia por tu LinkedIn
  { name: 'Tecnologías que domino', href: 'https://github.com/antoolr?tab=repositories' },
  { name: 'Sobre mí', href: '#formaciones' }, // Enlace interno a tu sección de títulos
];

const stats = [
  { name: 'Experiencia en desarrollo web', value: '+4 años' },
  { name: 'Especializado en análisis y mitigación', value: 'Ciberseguridad' },
  { name: 'Desarrollo de frontend y backend', value: 'Full‑Stack' },
  { name: 'En cada proyecto que realizo', value: '100% compromiso' },
];

export default function QSomos() {
  return (
    <section id="QSomos" className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="pt-20 w-full">
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
          {/* Imagen de fondo con opacidad ajustada */}
          <img
            alt=""
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
            className="absolute inset-0 -z-10 size-full object-cover opacity-40"
          />

          <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center"> {/* Añadido flex y centrado de items */}
        <div className="mx-auto max-w-2xl text-center lg:mx-auto"> {/* Cambiado lg:mx-0 por lg:mx-auto e incluido text-center */}
          <h2 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">¡Trabaja conmigo!</h2>
          <p className="mt-8 text-lg font-medium text-gray-300 sm:text-xl/8">
            Soy Antonio, desarrollador web y especialista en ciberseguridad. 
            Me apasiona crear aplicaciones modernas, rápidas y seguras, combinando diseño, funcionalidad y protección de datos.
          </p>
        </div>

            {/* SECCIÓN DE LINKS CON HOVER PROFESIONAL */}
            <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                {links.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    className="mx-auto group relative px-4 py-2 rounded-lg border border-transparent text-center transition-all duration-300 hover:bg-purple-500/10 hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                  >
                    <span className="relative z-10 flex items-center gap-2 group-hover:text-purple-300">
                      {link.name} 
                      <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
                    </span>
                  </a>
                ))}
              </div>

              {/* Stats con diseño limpio */}
              <dl className="mt-16 grid grid-cols-1 gap-8 border-t border-white/10 pt-16 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.name} className="flex flex-col-reverse gap-1">
                    <dt className="text-base leading-7 text-gray-400">{stat.name}</dt>
                    <dd className="text-3xl font-bold tracking-tight text-white">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
