
import './Header.css'

import { Link, useLocation } from "react-router-dom"
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

import fotoAntonio from "../../fotos/antonio.jpeg";

//Navigation es un array [] de objetos {}, --> Array JSON
const navigation = [
  { 
    name: 'Quienes somos',
    href: '/#QSomos',
    current: true,
  },
  { name: 'Trabajos', href: '/#trabajos', current: false },
  { name: 'Formaciones', href: '/#formaciones', current: false },
  { name: 'Contacto', href: '/#contacto', current: false },
  { name: 'Servicios', href: '/#servicios', current: false },
  { name: 'Cursos', href: '/cursos', current: false },

  
]

function classNames(...classes:any[]) {
  return classes.filter(Boolean).join(' ')
}

function getLinkTarget(href: string) {
  if (href.startsWith('/#')) {
    return { pathname: '/', hash: href.slice(href.indexOf('#')) }
  }
  return href
}

function isActiveNavItem(href: string, location: ReturnType<typeof useLocation>) {
  if (href === '/cursos') {
    return location.pathname === '/cursos'
  }
  if (href.startsWith('/#')) {
    return location.pathname === '/' && location.hash.toLowerCase() === href.slice(href.indexOf('#')).toLowerCase()
  }
  return location.pathname === href
}

function Header (){
    const location = useLocation()

    //codigo TS --> tsx o JS -- jsx

    return (
        //codigo html manipulado por componentes react
    <Disclosure as="header" className="fixed top-0 left-0 w-full bg-gray-800 z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-around sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto pr-30"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block w-[80%]">
                <nav id="nav-ppal" className="flex space-x-4">
                  {navigation.map((item) => {
                    const isActive = isActiveNavItem(item.href, location)
                    const classes = classNames(
                      isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )
                    const to = getLinkTarget(item.href)

                    return item.href.startsWith('/') ? (
                      <Link
                        key={item.name}
                        to={to}
                        aria-current={isActive ? 'page' : undefined}
                        className={classes}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={isActive ? 'page' : undefined}
                        className={classes}
                      >
                        {item.name}
                      </a>
                    )
                  })}
              </nav>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full p-1 text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="size-6" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <MenuButton className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span>
               <img
              alt="Antonio"
              src={fotoAntonio} 
              className="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10 object-cover"
            />
              </MenuButton>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg outline outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Mi perfil
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Configuración
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => {
            const isActive = isActiveNavItem(item.href, location)
            const classes = classNames(
              isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white',
              'block rounded-md px-3 py-2 text-base font-medium',
            )
            const to = getLinkTarget(item.href)

            return item.href.startsWith('/') ? (
              <DisclosureButton key={item.name} as={Link} to={to} className={classes}>
                {item.name}
              </DisclosureButton>
            ) : (
              <DisclosureButton key={item.name} as="a" href={item.href} className={classes}>
                {item.name}
              </DisclosureButton>
            )
          })}
        </div>
      </DisclosurePanel>
    </Disclosure>
    )
}

export default Header;