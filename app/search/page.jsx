import Styles from "@/styles/Search.module.css";

import GridSearch from "./components/gridSearch/GridSearch";
import SliderSearch from "./components/sliderSearch/SliderSearch";
import Nav from "@/components/nav/Nav";
import Footer from "@/components/footer/Footer";

import { getContent } from "@/utils/searchUtils";
import { getPodcasts } from "@/utils/podcastUtils";

export default async function Search({params, searchParams}) {
  let youMayLike = await getPodcasts();
  let [res, search, status] = await getContent(searchParams)

  if(status) {
    return (
      <>
        <Nav />
        <h1 className={Styles.title}>
          {!res.articles && !res.podcasts ? <span className={Styles.wrong}>0</span> : ''}Resultados de búsqueda para "{search}"
        </h1>
  
        {res.articles?.length > 0 && (
          <SliderSearch contenido={res.articles} label={"Artículos"} />
        )}
  
        {res.podcasts?.length > 0 && (
          <GridSearch
            contenido={res.podcasts}
            label={"Podcasts"}
          />
        )}
        <GridSearch contenido={youMayLike} label={"También te puede gustar"} />
        <Footer />
      </>
    );
  } else {
    return <h1>nada</h1>
  }
}
