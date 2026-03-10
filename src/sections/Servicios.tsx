import dataServicios from "../data/servicios.json"

const Servicios = () => {
    return(
        <section id="servicios" className="min-h-screen items-center justify-center flex-col">
            <h1 className="bg-gray-900 py-24 sm:py-22">
                Servicios
                
            </h1>
            <ul>
                {
                dataServicios.map( (servicio) => (
                <li
                key ={servicio.titulo}
                className="text-red list-decimal text-left"> 
                 
                {servicio.titulo} - {servicio.categoria} 
                 </li>
                ))

                }
                </ul>
        </section>
    )
}

export default Servicios;