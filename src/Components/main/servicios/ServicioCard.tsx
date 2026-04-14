import type { Iservicio } from "@/model/interfaces/IServicio";

import { Badge } from "@/Components/ui/badge"
import { Button } from "@/Components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card"

interface Props {
    servicio: Iservicio
}

export const ServicioCard = ({ servicio }:Props) => {
    return(
        <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src={servicio.imagen}
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">Featured</Badge>
        </CardAction>
        <CardTitle>{servicio.titulo}</CardTitle>
        <CardDescription>
          {servicio.descripcion}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">View Event</Button>
      </CardFooter>
    </Card>
       
      )
}