import Nav from '@/components/nav/Nav'
import Footer from '@/components/footer/Footer'
import Category from '@/app/components/category/Category'
import Header from '@/app/components/header/Header'
import Slider from '@/app/components/slider/Slider'

import { obtenerDatos, obtenerArticulos, mezclarDatos } from '@/utils/homeUtils'

export const metadata = {
  title: 'Home | Feymind'
};

export default async function Home() {
  const contenido = await obtenerDatos()
  const articulos = await obtenerArticulos()
  const contenidoHeader = contenido.slice(0, 3)
  const [contenidoU, contenidoN, contenidoD] = mezclarDatos(contenido)
  return (
    <>
      <Nav />
      <Header contenido={contenidoHeader} />
      <Category contenido={["IT", "Filosofía", "Naturales"]} />
      <Slider content={contenidoU} subtitle={"Últimos Lanzamientos"} />
      <Slider content={articulos}  subtitle={"Últimos Artículos"} post/>
      <Slider content={contenidoN} subtitle={"Naturaleza Del Conocimiento"} />
      <Slider content={contenidoD} subtitle={"Desarrollo Personal"}/>
      <Footer />
    </>
  )
}