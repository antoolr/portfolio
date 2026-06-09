import Header from "../Components/main/Header"
import Formaciones from "../sections/Formaciones"
import QSomos from "../sections/QSomos"
import Trabajos from "../sections/Trabajos"
import Servicios from "../sections/Servicios"

function MainLayout () {
  return (
    <div className="min-h-screen w-full bg-gray-900 text-white flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <QSomos />
        <Trabajos />
        <Formaciones />
        <Servicios />
      </main>
    </div>
  )
}

export default MainLayout
