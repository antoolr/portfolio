import type { Iservicio } from "@/model/interfaces/IServicio";
import { ServicioCard } from "./ServicioCard";
//import { ServicioCard } from "@/Components/main/servicios/ServiciosCard"


interface Props{
    servicios: Iservicio[];
}

export const ServiciosCard =({servicios}: Props) => {
    return(
        <div className="grid gap-6 md:grip-cols-2 lg:grid-cols-3">
            {
               servicios.map( (servicio) => (
                <ServicioCard servicio={servicio}/>
               )) 
            }
        </div>
    )
}